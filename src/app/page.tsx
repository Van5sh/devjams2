// pages/index.tsx
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home1 from "../app/pages/Home/page";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black-700">
      <Navbar />
        <Home1 />
      <Footer />
    </div>
  );
}
