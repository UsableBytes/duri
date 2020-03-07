import React from 'react';
import { HeroVideo, OverlayTextContainer } from '../../components/heroVideo/heroVideo';
import { Feature } from '../../components/featureList/feature';
import { NavBar } from '../../components/navBar/navBar';
import { FeaureList, IntialText, MainText, SubText, Button } from './videoSection.style';

export const VideoSection = (props) =>{
    return (
        <>
            <HeroVideo>
                <OverlayTextContainer>
                    <IntialText>See the world never like before</IntialText>
                    <MainText>New World</MainText>
                    <SubText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus.</SubText>
                    <Button>Click Here</Button>
                </OverlayTextContainer>
                <NavBar/>
                <FeaureList>
                    <Feature/><Feature/><Feature/><Feature/><Feature/><Feature/><Feature/><Feature/>
                </FeaureList>
            </HeroVideo>
        </>
    )
};
