import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import Gallery from './Pages/Gallery'
import HomePage from './Pages/HomePage'
import Menu from './Pages/Menu'
const App = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      {/* <Hero/> */}
      <HomePage/>
      <AboutPage/>
      <Menu/>
      <Gallery/>
      <ContactPage/>

    </main>
  )
}

export default App
