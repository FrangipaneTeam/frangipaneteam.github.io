import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Team from './components/Team/Team'
import Projects from './components/Projects/Projects'
import Contribs from './components/Contribs/Contribs'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'



const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "https://frangipane.io/script.js"

    script.async = true

    script.setAttribute("data-website-id", "24b08a89-b378-499e-ac99-7e97ccf79bff")
    script.setAttribute("data-domains", "frangipane.io")

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])


  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Contribs />
        <Team />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
