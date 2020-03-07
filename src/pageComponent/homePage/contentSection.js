import React from  'react';
import { Container, ContentHeader, ContentSubHeader, CardImgContainer, CardTitle } from './contentSection.style';
import { Card, CardContent, CardMedia } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';
import Plane from '../../icons/travel/transport/plane.svg';
import Dinner from '../../icons/travel/restaurant/dinner.svg';


export const ContentSection = () => {
    return (
        <Container>
            <ContentHeader>Why Duri?</ContentHeader>
            <ContentSubHeader>Well organized tours to elevate your spirit!</ContentSubHeader>
            <Grid>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <Plane width = '230px' height = '150px' fill = "#5d55fa"></Plane>
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Winter Specials</CardTitle>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!
                    </CardContent>
                </Card>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <Dinner width = '230px' height = '150px' fill = "#5d55fa"></Dinner>
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Premium Services</CardTitle>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!
                    </CardContent>
                </Card>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <Dinner width = '230px' height = '150px' fill = "#5d55fa"></Dinner>
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Duri Specials</CardTitle>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nulla ipsa assumenda cumque obcaecati ut. Tenetur natus accusantium similique laboriosam!
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
};
