import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sector from "./components/Sector";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sector/>
      <Categories/>
      
    </div>
  );
}
