import React from 'react'
import NavBar from '../components/NavBar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div><NavBar/><HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer"/>
        <AboutContent/>
    <Footer/></div>
  )
}

export default About