import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MAXLogo from '../../images/max_icon.jpg';
import AMDLogo from '../../images/amd_icon.png';
import McMasterLogo from '../../images/mcmaster_icon.png';
import MacBridgeLogo from '../../images/macbridge_icon.png';
import WSSLogo from '../../images/wss_icon.png';
import RHKSSLogo from '../../images/rhkss_icon.jpg';
import MMLogo from '../../images/MasterMind_icon.jpg';
import FESLogo from '../../images/Franklin_icon.png';

import {
    ExperiencesContainer,
    ExperiencesTitle,
    ExperiencesSubtitle,
    ExperiencesTimelineLogo,
    TimelineTitle,
    TimelineSubtitle,
    TimelineBtn,
    ExperiencesDetailContainer,
    ExperiencesBulletPoint,
    ExperiencesDetail,
    ExperiencesBtn,
    ExperiencesBtnContainer,
    EducationTimelineLogo,
    EducationDegree,
    EducationBtnContainer,
    EducationDetailsSubtitle
} from './ExperiencesElements';

const Experiences = () => {
    return (
        <ExperiencesContainer id="experiences">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ExperiencesTitle>Experiences</ExperiencesTitle>
            <br />
            <br />
            <br />
            <ExperiencesSubtitle>Work Experience</ExperiencesSubtitle>
            <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April 2021 - Present"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<ExperiencesTimelineLogo src = {MAXLogo} alt = "MAX" />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">MAX Gala | Remote, Canada</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2020 - April 2021"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={<ExperiencesTimelineLogo src = {AMDLogo} alt = "AMD" />}
                >
                    <h3 className="vertical-timeline-element-title">Display Software Engineer, Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">AMD | Markham, ON</h4>
                    {/* <p>
                    •	Created a program for AMD customers to convert display connector data into 
                    binary files to flash ROMs using Node.js environment and Electron framework, which eliminated human error and increased procedure time by 5 times
                    </p>
                    <p>
                    •	Followed standard software development life cycle to ensure working and 
                    supported product
                    </p>
                    <p>
                    •	Utilized Jira to lead development of utility for display connectors and 
                    wrote debug plan to test program
                    </p>
                    <p>
                    •	Coded a script that identifies critical color mismatch spots in images 
                    and videos after going through different compression and decompression algorithms for various display standards using MATLAB
                    </p>
                    <p>
                    •	Reviewed client schematics and layouts to ensure AMD requirements were 
                    met before production
                    </p>
                    <p>
                    •	Created detailed technical guide for engineers to follow for production 
                    of display identification board
                    </p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2017 - April 2020"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<ExperiencesTimelineLogo src = {McMasterLogo} alt = "McMaster" />}
                >
                    <h3 className="vertical-timeline-element-title">IT Assistant (Full Time Summers Else Part Time)</h3>
                    <h4 className="vertical-timeline-element-subtitle">McMaster University | Hamilton, ON</h4>
                    <p>
                    •	Utilized JavaScript to contribute to patient check-in program to create a 
                    contactless check-in system and reduce lines
                    </p>
                    <p>
                    •	Rewrote code section to utilize barcode scanning instead of swipe scanning, 
                    increasing success rate from 35% to 100%
                    </p>
                    <p>
                    •	Self-taught and completed upgrade of WordPress website using Ubuntu terminal 
                    within two weeks
                    </p>
                    <p>
                    •	Created standard software/hardware documentation and provided technical 
                    guidance to 100+ staff/faculty members
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="July 2016 - April 2020"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<ExperiencesTimelineLogo src = {MacBridgeLogo} alt = "MacBridge" />}
                >
                    <h3 className="vertical-timeline-element-title">Tutor (On Call)</h3>
                    <h4 className="vertical-timeline-element-subtitle">MacBridge Academy | Hamilton, ON</h4>
                    <p>
                    •	Aided students in identifying areas of weakness to assist with the completion of 
                    homework, in-class comprehension, and increased grades on tests and projects 
                    </p>
                    <p>
                    •	Prepared lesson plans which directly align with individual student goals 
                    and academic needs. 
                    </p>
                    <p>
                    •	Maintained the macbridge.ca website, which has served to attract new clients 
                    and directly impact the continuous growth of MacBridge Academy since its launch.
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
                <br />
                <br />
                <br />
                <br />
                <br />
                <ExperiencesSubtitle>Education</ExperiencesSubtitle>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="September 2017 - April 2022 [Expected]"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        icon={<ExperiencesTimelineLogo src = {McMasterLogo} alt = "AMD" />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Computer Engineering</h3>
                        <h4 className="vertical-timeline-element-subtitle">McMaster University | Hamilton, ON, Canada</h4>
                        <p>
                        Courses: Fundamentals of Machine Learning, Software Development, 
                        Data Structures and Algorithms, Principles of Programming, 
                        Adv. Probability and Random Processes, Digital Systems Design, Computer Aided Engineering
                        </p>
                        <p>
                        Awards: The IMPACT Initiative 1st Place, Entrance Scholarship
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        icon={<ExperiencesTimelineLogo src = {WSSLogo} alt = "WSS" />}
                    >
                        <h3 className="vertical-timeline-element-title">Westdale Secondary School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hamilton, ON, Canada</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        icon={<ExperiencesTimelineLogo src = {RHKSSLogo} alt = "RHKSS" />}
                    >
                        <h3 className="vertical-timeline-element-title">R.H. King Academy</h3>
                        <h4 className="vertical-timeline-element-subtitle">Toronto, ON, Canada</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        icon={<ExperiencesTimelineLogo src = {MMLogo} alt = "MM" />}
                    >
                        <h3 className="vertical-timeline-element-title">MasterMind English Medium School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Uttara, Dhaka, Bangladesh</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: '#2A4C34', color: '#fff' }}
                        icon={<ExperiencesTimelineLogo src = {FESLogo} alt = "FES" />}
                    >
                        <h3 className="vertical-timeline-element-title">Franklin Elementary School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Pullman, WA, United States</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        //icon={<ExperiencesTimelineLogo src = {McMasterLogo} alt = "McMaster" />}
                    >
                        <h3 className="vertical-timeline-element-title">Ecole Chisaz</h3>
                        <h4 className="vertical-timeline-element-subtitle">Crissier, Switzerland</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="May 2017 - April 2020"
                        iconStyle={{ background: 'white', color: '#fff' }}
                        //icon={<ExperiencesTimelineLogo src = {McMasterLogo} alt = "McMaster" />}
                    >
                        <h3 className="vertical-timeline-element-title">Ecole Les Noutes</h3>
                        <h4 className="vertical-timeline-element-subtitle">Crissier, Switzerland</h4>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
        </ExperiencesContainer>
    )
}

export default Experiences
