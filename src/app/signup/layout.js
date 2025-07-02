import Navbar from "../components/Navbar";


export default function SignUpLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
