import React from  'react';
import { Container } from './carouselImage.style';


export const CarouselImage = (props) => {
    return (
        <Container>{props.children}</Container>
    )
};
