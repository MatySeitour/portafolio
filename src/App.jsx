import './App.css'
import { CopyContextProvider } from './Context/CopyStateContext';
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { useContext } from 'react';

function App() {


  return (
    <>
      <div key={2} className='background-bug'></div>
      <div className='content'></div>
      <CopyContextProvider>
        {/* <Background /> */}
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </CopyContextProvider>

    </>

  )
}

export default App
