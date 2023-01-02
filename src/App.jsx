import './App.css'
import { Hero } from './components/Hero';
import { Background } from './components/Background';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <div key={2} className='background-bug'></div>
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
