import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Grid } from '../../components/grid/grid';
import { Card, CardAction, CardContent, CardMedia } from '../../components/card/card';
import { CardImage } from '../../components/cardImage/cardImage';
import { TourContainer, TourHeader, TourSubHeader, CardTitle, CardInfo, TourType, CardExplore } from './tourSection.style';


export const TourSection = () => {
    const data = useStaticQuery(graphql `
		query Images{
			ladakh: file(relativePath: {eq: "gallary/ladakh.jpg"}) {
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
            corbettNP: file(relativePath: {eq: "gallary/corbetteNP.jpg"}) {
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
            mysore: file(relativePath: {eq: "gallary/mysore.jpg"}) {
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
            tajMahal: file(relativePath: {eq: "gallary/tajMahal.jpg"}) {
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
            goa: file(relativePath: {eq: "gallary/goaChurch.jpg"}) {
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
            konark: file(relativePath: {eq: "gallary/konarkTemple.jpg"}) {
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
                            fixed = {data.ladakh.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>Adventure</TourType>
                        <TourType>Mountains</TourType>
                        <TourType>Ice and snow</TourType>
                        <CardTitle>Adventurous Ladhakh</CardTitle>
                        <CardInfo>Adventure activities in Leh Ladakh include Chadar trek, Biking in Ladakh, Camping in Ladakh, Ladakh marathon, Mountain biking, Play polo, Ice hockey and many more... </CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.corbettNP.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>Jungle</TourType>
                        <TourType>Adventure</TourType>
                        <CardTitle>Corbette National Park</CardTitle>
                        <CardInfo>Corbett National Park, set amidst the foothills of Himalayas, houses a variety of flora and fauna including rare ones such as tigers and is a treat for wildlife...</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.mysore.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>Jungle</TourType>
                        <TourType>City tours</TourType>
                        <CardTitle>Karnataka Jewels</CardTitle>
                        <CardInfo>One State, Many Worlds. Karnataka is a tapestry of colours, cultures, flavours, landscapes, timelessness and spectacular beauty. Amazing Tours and Adventures waiting for you...</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>

                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.tajMahal.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>City tours</TourType>
                        <TourType>Adventure</TourType>
                        <CardTitle>Golden Tringle</CardTitle>
                        <CardInfo>Embark on a wonderful journey to explore the capital city of Delhi, to witness the wonder of the world, Taj Mahal at Agra and admire the beauty of Pink city Jaipur... </CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.goa.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>Beach</TourType>
                        <TourType>Adventure</TourType>
                        <TourType>City tours</TourType>
                        <CardTitle>Stunning Goa</CardTitle>
                        <CardInfo>Goa is a paradise for backpackers as well as leisure seekers. This winter, pack your bag and explore the mesmerizing beauty, great culinary treats and stunning history of Goa...</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
                <Card>
                    <CardMedia>
                    <CardImage>
                        <BackgroundImage
                            fixed = {data.konark.childImageSharp.fixed}
                            backgroundColor={`#040e18`}
                        >
                        </BackgroundImage>
                    </CardImage>
                    </CardMedia>
                    <CardContent>
                        <TourType>Beach</TourType>
                        <TourType>City Tour</TourType>
                        <CardTitle>Magnificient Odisha</CardTitle>
                        <CardInfo>The land of paddy fields and palm-fringed silver beaches, temples, rivers, waterfalls and tribal people, is filled with major attractions such as the magnificent temples, beaches and more...</CardInfo>
                    </CardContent>
                    <CardAction>
                        <CardExplore>Explore</CardExplore>
                    </CardAction>
                </Card>
            </Grid>
        </TourContainer>
    )
};
