import React, { useState, useEffect,useLayoutEffect, useRef } from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import { CarouselImage } from './carouselImage';
import { CarouselArrow } from './carouselArrow';
import { Container, SliderContainer } from './carousel.style';

export const Carousal= () => {
    const data = useStaticQuery(graphql `
    query Carousal{
        image0: file(relativePath: {eq: "gallary/parth.jpg"}) {
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
        image1: file(relativePath: {eq: "gallary/eric.jpg"}) {
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
    }`);

    let imgUrls = [
        {
            id: 1,
            url: `${data.image0.childImageSharp.fixed.src}`,
        }, {
            id: 2,
            url: `${data.image1.childImageSharp.fixed.src}`,
        }, {
            id: 3,
            url: `${data.image2.childImageSharp.fixed.src}`,
        },{
            id: 4,
            url: `${data.image3.childImageSharp.fixed.src}`
        }
    ];

    const [imageSliderWidth, setImageSliderWidth] = useState(0);
    const [isNextSlide, setNextSlide] = useState(0);
    const [isPrevSlide, setPrevSlide] = useState(0);
    const sliderRef =  useRef();

    useEffect(()=> {
        sliderRef.current.appendChild(sliderRef.current.firstElementChild);
    },[isNextSlide]);

    useEffect(()=> {
        sliderRef.current.insertBefore(sliderRef.current.firstElementChild, sliderRef.current.lastElementChild);
    },[isPrevSlide]);

    const prevSlide = () => {
        setImageSliderWidth(() => {
            return 0;
        });
        setPrevSlide(prev => prev + 1);
    };

    const nextSlide = () => {
        setImageSliderWidth(() => {
            return -25;
        });
        setNextSlide(prev => prev + 1);
    };

    return (
        <Container>
            <SliderContainer  ref = {sliderRef} sliderWidth = {imageSliderWidth} >
                {imgUrls.map((img) => {
                    return <CarouselImage key = {img.id}><img src={img.url} key = {img.id} alt={img.id}/></CarouselImage>
                })}
            </SliderContainer>
          <CarouselArrow direction="left" clickFunction={prevSlide} arrow="&#9664;"/>
          <CarouselArrow direction="right" clickFunction={nextSlide} arrow="&#9654;"/>
        </Container>
    )
}
