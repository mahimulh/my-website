import React, {useState, useEffect} from 'react'; //type 'rafce' and it will do the import and make the function
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import Resume from '../../resources/Mahimul-Hoque-Resume.pdf';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }; 

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick= {toggleHome}>MAHIMUL HOQUE | COMPUTER ENG</NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to = "about" smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "experiences" smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80}>Experiences</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to = "projects" smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href={Resume} target = "_blank">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar;
