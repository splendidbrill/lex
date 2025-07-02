import Navbar from "../components/Navbar";


export default function SignInLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
