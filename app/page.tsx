import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sector from "./components/Sector";
import Categories from "./components/Categories";
import Job from "./components/Job";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sector/>
      <Categories/>
      <Job/>
      
      
    </div>
  );
}
