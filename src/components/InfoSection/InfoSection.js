import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import ImgTech from "../../images/bank-2.svg";

import {
    InfoSectionContainer,
    InfoRow,
    InfoColumn,
    TextWrapper,
    ImgWrapper,
    TopLine,
    Img,
    Heading,
    Subtitle
} from "./InfoSection.elements";


function InfoSection({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    // img,
    alt,
    imgStart,
    // start
}) {
    return (
        <>
            <InfoSectionContainer lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                              <Link to="/sign-up">
                                  <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                  </Button>
                              </Link>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={ImgTech} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>

                    </InfoRow>
                </Container>
            </InfoSectionContainer>
        </>
    )
}


export default InfoSection
