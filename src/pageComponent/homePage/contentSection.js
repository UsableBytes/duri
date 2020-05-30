import React from  'react';
import { Container, ContentHeader, ContentSubHeader, CardImgContainer, CardTitle } from './contentSection.style';
import { Card, CardContent, CardMedia } from '../../components/card/card';
import { Grid } from '../../components/grid/grid';

import Premium from '../../icons/travel/miscellaneous/premium.svg';
import Snowman from '../../icons/travel/miscellaneous/snowman.svg';
import FamilyOnPlane from '../../icons/travel/miscellaneous/familyOnPlane.svg';

export const ContentSection = () => {
    return (
        <Container>
            <ContentHeader>Why Duri?</ContentHeader>
            <ContentSubHeader>Well organized tours to elevate your spirit!</ContentSubHeader>
            <Grid>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <Snowman width = '230px' height = '150px' fill = "#5d55fa" />
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Winter Specials</CardTitle>
                            The true splendor of the country shines in the season of pleasant climate. The geographical diversity encompasses mighty peaks to azure shores, scenic deserts to lush greens.
                    </CardContent>
                </Card>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <Premium width = '230px' height = '150px' fill = "#5d55fa" />
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Premium Services</CardTitle>
                            The Duri holidays offers the most premium service. Customised packages, great travelling experiences, and informative guides are the staples of our services.
                    </CardContent>
                </Card>
                <Card noShadow = {true}>
                    <CardMedia>
                        <CardImgContainer>
                            <FamilyOnPlane width = '230px' height = '150px' fill = "#5d55fa" />
                        </CardImgContainer>
                    </CardMedia>
                    <CardContent>
                        <CardTitle>Duri Specials</CardTitle>
                            The Duri holidays offers all kinds of special tourism, like piligrames, Educational, womens special, corporate, childrens special, adventurous, cultural tourisam.
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    )
};
