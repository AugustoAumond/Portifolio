import './App.css';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import About from './components/about/about.tsx';



function App() {
  return (
    <div className='bg-slate-950 flex flex-col'>

      <Header/>

      <About/>

      <Projects/>

      <Contact/>
    </div>
  )
}

export default App
