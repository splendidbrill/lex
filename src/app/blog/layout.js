import Navbar from "../components/Navbar";


export default function SignUpLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
