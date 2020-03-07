import React from 'react';
import { Container } from './carouselArrow.style';


export const CarouselArrow = (props) =>{
    return (
        <Container
           {...props}
            onClick={ props.clickFunction }>
            { props.arrow }
        </Container>
    );
}