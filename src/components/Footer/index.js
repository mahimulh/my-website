import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconsLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to = "/sigin">How it works</FooterLink>
                            <FooterLink to = "/sigin">Testimonials</FooterLink>
                            <FooterLink to = "/sigin">Careers</FooterLink>
                            <FooterLink to = "/sigin">Investors</FooterLink>
                            <FooterLink to = "/sigin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to = "/sigin">How it works</FooterLink>
                            <FooterLink to = "/sigin">Testimonials</FooterLink>
                            <FooterLink to = "/sigin">Careers</FooterLink>
                            <FooterLink to = "/sigin">Investors</FooterLink>
                            <FooterLink to = "/sigin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to = "/sigin">How it works</FooterLink>
                            <FooterLink to = "/sigin">Testimonials</FooterLink>
                            <FooterLink to = "/sigin">Careers</FooterLink>
                            <FooterLink to = "/sigin">Investors</FooterLink>
                            <FooterLink to = "/sigin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to = "/sigin">How it works</FooterLink>
                            <FooterLink to = "/sigin">Testimonials</FooterLink>
                            <FooterLink to = "/sigin">Careers</FooterLink>
                            <FooterLink to = "/sigin">Investors</FooterLink>
                            <FooterLink to = "/sigin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}>
                            MAHIMUL HOQUE
                        </SocialLogo>
                        <WebsiteRights>Mahimul Hoque © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href="https://www.linkedin.com/in/mahimulh/" target="-blank" aria-label = "LinkedIn">
                                <FaLinkedin />
                            </SocialIconsLink>
                            <SocialIconsLink href="https://github.com/mahimulh" target="-blank" aria-label = "Github">
                                <FaGithub />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer> 
    )
}

export default Footer
