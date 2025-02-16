import React from 'react';
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";


function Home() {

  return (
    <>
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    </>
  )
}

export default Home;