import React from 'react'
import {Navbar} from './layout/Navbar'
import {Hero} from './sections/Hero'
import {About} from './sections/About'
import {Contacts} from './sections/Contacts'
import {Experience} from './sections/Experience'
import {Testimonials} from './sections/Testimonials'
import {Projects} from './sections/Projects'

const App = () => {
  return (
    <div className=' min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
        <Experience />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
  