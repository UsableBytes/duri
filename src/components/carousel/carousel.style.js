import styled from '@emotion/styled';
import tw from 'tailwind.macro';


export const Container = styled.div `
    ${tw `flex relative`};
    width: 100%;
    max-width: 1440px;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    margin: 0 auto;
`;

export const CarouselContainer = styled.div `
    width: 80%;
    height: 300px;
    margin: 0 auto;
`;

export const SliderContainer = styled.div `
    display: flex;
    height: 100%;
    width: 133.33%;
    min-width: 1200px;
    flex-shrink: 0;
    transform: translate(${props =>`${props.sliderWidth}%`});
    /* transition: all 1s ease-in-out; */
`;
