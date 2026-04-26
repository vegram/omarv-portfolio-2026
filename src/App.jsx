import "./App.css";
import React from "react";
import { Navbar } from "./assets/components/Navbar";
import { MobileMenu } from "./assets/components/MobileMenu";
import { Home } from "./assets/components/sections/Home";
import { About } from "./assets/components/sections/About";
import { Projects } from "./assets/components/sections/Projects";
import { Contact } from "./assets/components/sections/Contact";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
