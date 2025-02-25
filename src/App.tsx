// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'
import Techs from './components/Techs/Techs'

function App() {

  return (
    <main className='relative'>
      <Scroller />
      <Header />
      <About />
      <Techs />
    </main>
  )
}

export default App
