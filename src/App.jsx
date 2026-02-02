import React from 'react'
import {Navbar} from './layout/Navbar'
import {Hero} from './sections/Hero'
import {About} from './sections/About'
import {Contacts} from './sections/Contacts'
import {Experience} from './sections/Experience'
import {Testimonials} from './sections/Testimonials'
import {Projects} from './sections/Projects'
import {Footer} from './layout/Footer'

const App = () => {
  return (
    <div className=' min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
  