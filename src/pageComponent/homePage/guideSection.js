import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import { GuideContainer, GuideCard, GuideContent, ContentHeader, ContentSubHeader } from './guideSection.style';
import { Grid } from '../../components/grid/grid';
import  Img  from 'gatsby-image';


export const GuideSection = () => {
    const data = useStaticQuery(graphql `
        query Images2{
            image: file(relativePath: {eq: "gallary/parth.jpg"}) {
                id
                childImageSharp {
                    fixed (width:370, height:500){
                        ...GatsbyImageSharpFixed
                    }
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <GuideContainer>
            <ContentHeader>Meet Guides</ContentHeader>
            <ContentSubHeader>Our highly trained and efficient guides at your service</ContentSubHeader>
            <Grid>
                <GuideCard>
                    <Img fixed = {data.image.childImageSharp.fixed} />
                    <GuideContent>
                        <ContentSubHeader>Mat Frazer</ContentSubHeader>
                    </GuideContent>
                </GuideCard>
                <GuideCard>
                    <Img fixed = {data.image.childImageSharp.fixed} />
                    <GuideContent>
                        <ContentSubHeader>Eddie hall</ContentSubHeader>
                    </GuideContent>
                </GuideCard>
                <GuideCard>
                    <Img fixed = {data.image.childImageSharp.fixed} />
                    <GuideContent>
                        <ContentSubHeader>Brian shaw</ContentSubHeader>
                    </GuideContent>
                </GuideCard>
            </Grid>
        </GuideContainer>
    )
};
