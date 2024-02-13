import { BrowserRouter } from 'react-router-dom';


import { About, Contact,  Hero, Navbar, Tech, Works, StarsCanvas,Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gray-900'>
        <div className='bg-neutral-900 bg-gradient-to-b bg-cover bg-no-repeat bg-center'>
          <Navbar />
          
        </div>
        <div className='relative z-0'>
          <Hero />
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Tech />
          <Works />
          <StarsCanvas />
        </div>
        
        <div className='relative z-0'>
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
