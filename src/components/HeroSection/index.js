import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeadshotImage, HeroH1, HeroSubtitle, HeroBtnWrapper, AboutPdfStyle, TypeWriter} from './HeroElements';
import HeadShot from '../../images/headshot.jpg';

//"learning.", "tech.", "trying new food.", "being active."
const HeroSection = () => {
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeadshotImage src={HeadShot} alt = "headshot" />
                <HeroH1>Hi, I am Mahimul Hoque</HeroH1>

                {/* <HeroSubtitle>
                    <span>I love: </span>
                    <TypeWriter text = {["learning", "tech", "trying new food", "being active"]} speed = "150" eraseSpeed = "100" eraseDelay = "500" typingDelay = "500" cursorClassName = "CursorStyle" />
                </HeroSubtitle> */}
                <HeroSubtitle>
                    <p>Facts about me: </p>
                    <TypeWriter text = {
                        ["I love learning and applying what I learn",
                         "I love being active and trying new food",
                        "I've lived in 4 countries and visited 3 more",
                        "I've played for my school's cricket team"]}
                        speed = "80"
                        eraseSpeed = "100"
                        eraseDelay = "500" 
                        typingDelay = "500" 
                        cursorClassName = "CursorStyle" 
                    />
                </HeroSubtitle>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
