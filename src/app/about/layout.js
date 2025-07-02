import Navbar from "../components/Navbar";


export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
