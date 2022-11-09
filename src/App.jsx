import './App.css'
import { Hero } from './Hero'
import { Background } from './Background'
import { Projects } from './Projects';
import { Skills } from './Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer';

function App() {

  return (
    <>
      <div key={2} className='bg'></div>
      <div className='content'></div>
      <Background />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>

  )
}

export default App
