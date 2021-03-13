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
                    <ServicesP>Nothing yet! Come back for updates later.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2>Project 2</ServicesH2>
                    <ServicesP>Nothing yet! Come back for updates later.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2>Project 3</ServicesH2>
                    <ServicesP>Nothing yet! Come back for updates later.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Projects
