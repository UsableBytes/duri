import React from 'react';
import { Link ,graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { HeroImage } from '../components/heroImage/heroImage';
import { CardTitle, CardInfo, CardExplore, GridContainer  } from '../pageComponent/toursPage/tourListing.style';
import { CardImage } from '../components/cardImage/cardImage';
import { Grid } from '../components/grid/grid';
import { Card, CardAction, CardContent, CardMedia } from '../components/card/card';
import Layout from "../components/Layout";
import SEO from "../components/seo";

const ToursPage = ({data}) => {
    return (
        <Layout>
            <SEO title="Tours" />
            <HeroImage />
            <GridContainer>
                <Grid>
                    {data.allStrapiTours.nodes.map((elem, index) => {
                        return (<Card key ={ index }>
                            <CardMedia>
                                <CardImage>
                                    <BackgroundImage
                                        fixed = {elem.Image.childImageSharp.fixed}
                                        backgroundColor={`#040e18`}/>
                                </CardImage>
                            </CardMedia>
                            <CardContent>
                                <CardTitle>{elem.Title}</CardTitle>
                                <CardInfo>{elem.Description}</CardInfo>
                            </CardContent>
                            <CardAction>
                                <Link to={`/${elem.id}`}><CardExplore>Explore</CardExplore></Link>
                            </CardAction>
                        </Card>)
                    })}
                </Grid>
            </GridContainer>
        </Layout>
    )
}
export default ToursPage;

export const PageQuery = graphql `
query MyQuery {
  allStrapiTours {
    nodes {
        Title
        Description
        id
        Image {
            childImageSharp {
                fixed (width:370, height:300){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
  }
}
`