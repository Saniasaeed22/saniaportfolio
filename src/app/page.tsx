import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Projects from "./components/projects";
export default function Home() {
  return ( 
    
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
    
  );
}