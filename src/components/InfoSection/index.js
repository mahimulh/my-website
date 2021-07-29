import React from 'react'
import {Button} from '../ButtonElements';

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, AboutLink} from './InfoElements'

import img1 from '../../images/me1.jpg';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, p1, p2, p3, p4, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText = {lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText = {darkText}>
                                {p1}<br /><br />
                                {p2}<br /><br />
                                {p3}<br /><br />
                                {p4}
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src = {img1} alt = {"me1"}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>  
            </InfoContainer>
        </>
    )
}

export default InfoSection
