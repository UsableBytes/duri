import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Grid } from '../../components/grid/grid';
import { Card, CardAction, CardContent, CardMedia } from '../../components/card/card';
import { CardImage } from '../../components/cardImage/cardImage';
import { TourContainer, TourHeader, TourSubHeader, CardTitle, CardInfo, CardLocation, CardExplore } from './tourSection.style';


export const TourSection = () => {
    const data = useStaticQuery(graphql `
		query Images{
			image: file(relativePath: {eq: "gallary/eric.jpg"}) {
				id
				childImageSharp {
					fixed (width:370, height:300){
						...GatsbyImageSharpFixed
					}
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			},
            image2: file(relativePath: {eq: "gallary/ricardo.jpg"}) {
                id
				childImageSharp {
					fixed (width:370, height:300){
						...GatsbyImageSharpFixed
					}
					fluid {
						...GatsbyImageSharpFluid
					}
				}
            },
            image3: file(relativePath: {eq: "gallary/eberhard.jpg"}) {
                id
				childImageSharp {
					fixed (width:370, height:300){
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
        <TourContainer>
            <TourHeader>Popular Tours</TourHeader>
            <TourSubHeader>We have a unique way of meeting your adventurous expectations!</TourSubHeader>
            <Grid>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Pune</CardLocation>
                        <CardLocation>Mumbai</CardLocation>
                        <CardLocation>NY</CardLocation>
                        <CardTitle>Booking Demo</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image2.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Leh</CardLocation>
                        <CardLocation>Manali</CardLocation>
                        <CardLocation>Kashmir</CardLocation>
                        <CardTitle>Heaven</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image3.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Chumthang</CardLocation>
                        <CardLocation>Tso Morari</CardLocation>
                        <CardLocation>Tawang</CardLocation>
                        <CardTitle>Increadible India</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>

                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image3.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Chumthang</CardLocation>
                        <CardLocation>Tso Morari</CardLocation>
                        <CardLocation>Tawang</CardLocation>
                        <CardTitle>Increadible India</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Chumthang</CardLocation>
                        <CardLocation>Tso Morari</CardLocation>
                        <CardLocation>Tawang</CardLocation>
                        <CardTitle>Increadible India</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.image2.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <CardLocation>Chumthang</CardLocation>
                        <CardLocation>Tso Morari</CardLocation>
                        <CardLocation>Tawang</CardLocation>
                        <CardTitle>Increadible India</CardTitle>
                        <CardInfo>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
            </Grid>
        </TourContainer>
    )
};
