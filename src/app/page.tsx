import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Grid from "./components/table";

export default function Home() {
  return (
    <div className="bg-black-700">
      <Navbar/>
        <Grid/>
      <Footer/>
    </div>
  )
}
