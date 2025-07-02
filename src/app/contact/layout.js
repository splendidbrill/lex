import Navbar from "../components/Navbar";


export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
