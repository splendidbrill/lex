import Navbar from "../components/Navbar";


export default function PrivacyLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}
