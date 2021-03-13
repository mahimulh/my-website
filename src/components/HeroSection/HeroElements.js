import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeadshotImage = styled.img`
    z-index: 1;
    height: 250px;
    border: 2px solid #ebebeb;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-bottom: 25px;

    @media screen and (max-width: 768px){
        height: 180px;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroSubtitle = styled.div`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    
    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutPdfStyle = styled.a`
    text-decoration: none;
    background-color: #010104; 
    color: #ebebeb;
    border: 2px solid #ebebeb;
    padding: 10px 15px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    transition: 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #74b3ce; 
        border: 2px solid #010104;
    }
`

export const TypeWriter = styled(ReactTypingEffect)`
    margin-top: 25px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    
    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`