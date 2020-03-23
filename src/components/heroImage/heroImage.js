import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { NavBar } from '../navBar/navBar';
import { Container, OverlayText, ImageContainer} from './heroImage.style';


export const HeroImage = (props) => {

    const data = useStaticQuery(graphql `
      query Image {
        heroImage: file(relativePath: {eq: "gallary/heroImage.jpg"}) {
            id
            childImageSharp {
                fluid (maxWidth: 1920){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`);

    return (
        <Container>
            <NavBar />
            <OverlayText>
                {props.children}
            </OverlayText>
            <ImageContainer>
                <BackgroundImage fluid = {data.heroImage.childImageSharp.fluid} />
            </ImageContainer>
        </Container>
    )
}
