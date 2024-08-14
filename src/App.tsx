import './App.css'
import About from './components/about/About'
import Contact from './components/contact/contact'
import Header from './components/header/header'
import Projects from './components/projects/projects'


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
