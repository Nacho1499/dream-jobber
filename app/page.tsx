import Hero from "./components/Hero";
import Sector from "./components/Sector";
import Categories from "./components/Categories";
import Choose from "./components/Choose";
import Cta from "./components/Cta";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sector />
      <Categories />
      <Choose />
      <Cta />
      <Footer/>



    </div>
  );
}
