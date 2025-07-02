import Navbar from "../components/Navbar";


export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
