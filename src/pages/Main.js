
import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import {homeObjOne} from '../components/InfoSection/Data'

function Main() {

    return (
        <div>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Portfolio />
            <Skills/>
            {/* <InfoSection {...homeObjThree}/> */}

            <Contact />
        </div>
    )
}

export default Main
