import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowRight,ArrowForward } from './HeroElements'
import {Button} from '../Button/ButtonElement'

const HeroSection = () => {

    const[hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>선영의 포트폴리오</HeroH1>
                <HeroP>내용</HeroP>
                {/* <HeroBtnWrapper>
                    <Button to="downloadResume" onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        이력서 다운받기 {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
