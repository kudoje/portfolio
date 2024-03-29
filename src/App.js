import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
    </>
  )
}

export default App