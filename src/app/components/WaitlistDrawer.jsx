// "use client";

// import { useState } from "react";
// import {
//   Drawer,
//   DrawerTrigger,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerDescription,
//   DrawerClose,
// } from "@/components/ui/drawer";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { toast } from "sonner";

// const WaitlistDrawer = ({ triggerLabel = "Join Waitlist" }) => {
//   const [email, setEmail] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const supabase = useSupabaseClient();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return toast.error("Please enter a valid email");
//     setLoading(true);

//     const { data: existing, error: checkError } = await supabase
//       .from("waitlist")
//       .select("*")
//       .eq("email", email)
//       .single();

//     if (checkError && checkError.code !== "PGRST116") {
//       setLoading(false);
//       return toast.error("Something went wrong");
//     }

//     if (existing) {
//       setLoading(false);
//       return toast("You have already joined the waitlist.");
//     }

//     const { error } = await supabase.from("waitlist").insert([{ email }]);

//     setLoading(false);

//     if (error) {
//       return toast.error("Error joining waitlist");
//     }

//     setSuccess(true);
//   };

//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:bg-opacity-90">
//           {triggerLabel}
//         </button>
//       </DrawerTrigger>
//       <DrawerContent className="h-[50vh]">
//         <div className="w-full h-full flex flex-col justify-center items-center px-4">
//           {!success ? (
//             <>
//               <DrawerHeader className="text-center">
//                 <DrawerTitle>Join the Waitlist</DrawerTitle>
//                 <DrawerDescription>
//                   Submit your email to get early access.
//                 </DrawerDescription>
//               </DrawerHeader>
//               <form
//                 className="w-full flex flex-col gap-4 items-center mt-4"
//                 onSubmit={handleSubmit}
//               >
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full max-w-sm md:max-w-xs border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//                 <div className="flex flex-col gap-2 w-full max-w-sm md:max-w-xs">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className={`px-4 py-2 rounded-lg transition text-white ${
//                       loading
//                         ? "bg-gray-400 cursor-not-allowed"
//                         : "bg-blue-800 hover:bg-blue-950"
//                     }`}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                   <DrawerClose asChild>
//                     <button className="border border-gray-400 px-4 py-2 rounded-lg">
//                       Cancel
//                     </button>
//                   </DrawerClose>
//                   <p className="text-center"><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=18acfba8-713a-4e53-aa03-d681624602b4">Privacy Policy</a></p>
//                 </div>
//               </form>
//             </>
//           ) : (
//             <>
//               <h2 className="text-lg font-semibold mb-2">
//                 Thank you for joining the waitlist!
//               </h2>
//               <p className="mb-4">Do you have a message for us?</p>
//               <div className="flex gap-4">
//                 <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950">
//                   Yes
//                 </button>
//                 <DrawerClose asChild>
//                   <button className="border border-gray-400 px-4 py-2 rounded-lg">
//                     No, thanks
//                   </button>
//                 </DrawerClose>
//               </div>
//             </>
//           )}
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default WaitlistDrawer;

"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "sonner";

const WaitlistDrawer = ({ 
  triggerLabel = "Join Waitlist", 
  triggerClassName = "px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:bg-opacity-90",
  children // This allows for a custom trigger component
}) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = useSupabaseClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter a valid email");
    setLoading(true);

    const { data: existing, error: checkError } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      setLoading(false);
      return toast.error("Something went wrong");
    }

    if (existing) {
      setLoading(false);
      return toast("You have already joined the waitlist.");
    }

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    setLoading(false);

    if (error) {
      return toast.error("Error joining waitlist");
    }

    setSuccess(true);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || (
          <button className={triggerClassName}>
            {triggerLabel}
          </button>
        )}
      </DrawerTrigger>
      <DrawerContent className="h-[50vh]">
        <div className="w-full h-full flex flex-col justify-center items-center px-4">
          {!success ? (
            <>
              <DrawerHeader className="text-center">
                <DrawerTitle>Join the Waitlist</DrawerTitle>
                <DrawerDescription>
                  Submit your email to get early access.
                </DrawerDescription>
              </DrawerHeader>
              <form
                className="w-full flex flex-col gap-4 items-center mt-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full max-w-sm md:max-w-xs border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
                <div className="flex flex-col gap-2 w-full max-w-sm md:max-w-xs">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-4 py-2 rounded-lg transition text-white ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-800 hover:bg-blue-950"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                  <DrawerClose asChild>
                    <button className="border border-gray-400 px-4 py-2 rounded-lg">
                      Cancel
                    </button>
                  </DrawerClose>
                  <p className="text-center">
                    <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=18acfba8-713a-4e53-aa03-d681624602b4">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-2">
                Thank you for joining the waitlist!
              </h2>
              <p className="mb-4">Do you have a message for us?</p>
              <div className="flex gap-4">
                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950">
                  Yes
                </button>
                <DrawerClose asChild>
                  <button className="border border-gray-400 px-4 py-2 rounded-lg">
                    No, thanks
                  </button>
                </DrawerClose>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WaitlistDrawer;
