import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Experiences from "../components/Experiences";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            <Sidebar isOpen = {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Experiences />
            <Projects />
            <Footer />
        </Router>
    );
}

export default Home
