import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesCard, ServicesIcon, ServicesP} from './ProjectsElements';

const Projects = () => {
    return (
        <ServicesContainer id = "projects">
            <ServicesH1 > My Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Project 1</ServicesH2>
                    <ServicesP>Haven't updated this page yet. Check out my GitHub for projects I worked on and am working on.</ServicesP>
                    <a href = "https://github.com/mahimulh">Click Here</a>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2>Project 2</ServicesH2>
                    <ServicesP>Haven't updated this page yet. Check out my GitHub for projects I worked on and am working on.</ServicesP>
                    <a href = "https://github.com/mahimulh">Click Here</a>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Haven't updated this page yet. Check out my GitHub for projects I worked on and am working on.</ServicesP>
                    <a href = "https://github.com/mahimulh">Click Here</a>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Projects
