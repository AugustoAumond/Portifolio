import './App.css';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import Sobre from './components/sobre/sobre';




function App() {
  return (
    <div className='bg-slate-950 flex flex-col'>

      <Header/>

      <Sobre/>

      <Projects/>

      <Contact/>
    </div>
  )
}

export default App
