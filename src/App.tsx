// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Scroller from './components/Scroller/Scroller'

function App() {

  return (
    <main className='relative'>
      <Scroller />
      <Header />
      <About />
      <Experience />
    </main>
  )
}

export default App
