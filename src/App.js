import React from "react";
import './App.css'
import { Landing, About, Projects, Contact, Navbar, Footer } from './pages/index'

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;