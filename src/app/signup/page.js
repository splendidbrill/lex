// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { FaGoogle } from "react-icons/fa";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agree, setAgree] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!agree) return alert("You must agree to Terms & Conditions");
//     // signup logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold mb-1">Sign up</h2>
//         <p className="text-sm text-gray-500 mb-6">
//           Already joined?{" "}
//           <Link href="/signin">
//             <span className="text-blue-600 font-semibold cursor-pointer">Login now</span>
//           </Link>
//         </p>
//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email address"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               minLength={8}
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password (min. 8 character)"
//             />
//           </div>
//           <div className="flex items-center">
//             <input
//               id="agree"
//               type="checkbox"
//               checked={agree}
//               onChange={(e) => setAgree(e.target.checked)}
//               className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//             />
//             <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
//               I agree with <a href="#" className="text-blue-600 hover:underline">Terms &amp; Conditions</a>
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//           >
//             Join Lex
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <div className="mx-2 text-gray-400">or</div>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <button
//           onClick={() => {/* google signup */}}
//           className="w-full border border-gray-300 rounded-lg flex items-center justify-center py-2 hover:bg-gray-100 transition-colors"
//         >
//           <FaGoogle className="mr-2 text-red-500" />
//           Sign up with Google
//         </button>
//       </div>
//     </div>
// );
// }

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";

function Spinner() {
  return (
    <div className="flex justify-center py-4">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.replace("/welcome");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to Terms & Conditions");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      alert("Check your email to confirm your account.");
    }
  };

  // const signUpWithGoogle = async () => {
  //   setLoading(true);
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       // redirectTo: `${location.origin}/welcome`,
  //       // redirectTo: `${window.location.origin}/welcome`,
  //       options: { redirectTo: `${location.origin}/welcome` },
  //     },
  //   });
  //   if (error) {
  //     alert(error.message);
  //     setLoading(false);
  //   }
  // };

  const signUpWithGoogle = async () => {
  setLoading(true);

  if (typeof window === "undefined") {
    console.error("This code must run in the browser.");
    setLoading(false);
    return;
  }

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/welcome`,
    },
  });

  if (error) {
    alert(error.message);
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-1">Sign up</h2>
        <p className="text-sm text-gray-500 mb-6">
          Already joined?{" "}
          <Link href="/signin">
            <span className="text-blue-600 font-semibold cursor-pointer">Login now</span>
          </Link>
        </p>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
                  I agree with <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
              >
                Join Lex
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="mx-2 text-gray-400">or</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button
              onClick={signUpWithGoogle}
              className="w-full border border-gray-300 rounded-lg flex items-center justify-center py-2 hover:bg-gray-100"
            >
              <FaGoogle className="mr-2 text-red-500" />
              Sign up with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
