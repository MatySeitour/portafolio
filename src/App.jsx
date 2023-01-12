import './App.css'
import { CopyContextProvider } from './Context/CopyStateContext';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { useContext } from 'react';
import { About } from './components/About';

function App() {


  return (
    <>
      <div key={2} className='background-bug'></div>
      <div className='content'></div>
      <CopyContextProvider>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </CopyContextProvider>

    </>

  )
}

export default App
