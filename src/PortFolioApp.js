import React, { useRef } from 'react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'

export const PortFolioApp = () => {

  const experienceRef = useRef()
  const headerRef = useRef()
  const homeRef = useRef()
  const portfolioRef = useRef()
  const contactRef = useRef()


  const homeClick = e => {
    e.preventDefault()
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const headerClick = e => {
    e.preventDefault()
    headerRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const ExperienceClick = e => {
    e.preventDefault()
    experienceRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const portfolioClick = e => {
    e.preventDefault()
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const contactClick = e => {
    e.preventDefault()
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Modal
      homeRef={homeRef}
      headerClick={headerClick}
      />
      <NavBar
      homeClick={homeClick}
      headerClick={headerClick}
      ExperienceClick={ExperienceClick}
      portfolioClick={portfolioClick}
      contactClick={contactClick}
      />
      <div className="front">
        <div className="container">
          <Header
          headerClick={headerClick}
          headerRef={headerRef}
          />
          <Experience
          experienceRef={experienceRef}
          />
          <Projects
          portfolioRef={portfolioRef}
          />
          <Contact
          contactRef={contactRef}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <Footer/>
      </div>
    </div>
  )
}
