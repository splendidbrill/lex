import Navbar from "../components/Navbar";


export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
