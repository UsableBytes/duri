import React from 'react';
import { HeroVideo, OverlayTextContainer } from '../../components/heroVideo/heroVideo';
import { Feature } from '../../components/featureList/feature';
import { NavBar } from '../../components/navBar/navBar';
import { FeaureList, FeaureListHolder, Featureholder, IntialText, MainText, SubText, Button } from './videoSection.style';

import Mountain from '../../icons/travel/forest/mountains.svg';
import Beach from '../../icons/travel/beach/beach.svg';
import TowerClock from '../../icons/travel/monuments/tower-clock.svg';
import Forest from '../../icons/travel/forest/forest.svg';
import Plane from '../../icons/travel/transport/plane.svg';
import SkateBoard from '../../icons/travel/transport/scateboard.svg';
import NorthForest from '../../icons/travel/forest/north-forest.svg';
import Track from '../../icons/travel/forest/mountain-track.svg';

export const VideoSection = (props) =>{
    return (
        <>
            <HeroVideo>
                <OverlayTextContainer>
                    <IntialText>See the world never like before</IntialText>
                    <MainText>New World</MainText>
                    <SubText>Come and experience beautiful cultures with us</SubText>
                    <Button>Click Here</Button>
                </OverlayTextContainer>
                <NavBar/>
                <FeaureList>
                    <FeaureListHolder>
                        <Featureholder>
                            <Feature name = "Mountains"><Mountain fill = "#7b8794"/></Feature>
                            <Feature name = "Beach"><Beach fill = "#7b8794"/></Feature>
                            <Feature name = "City Tours"><TowerClock fill = "#7b8794"/></Feature>
                            <Feature name = "Jungle"><Forest fill = "#7b8794"/></Feature>
                            <Feature name = "International Tours"><Plane fill = "#7b8794"/></Feature>
                            <Feature name = "Adventure"><SkateBoard fill = "#7b8794"/></Feature>
                            <Feature name = "Snow and Ice"><NorthForest fill = "#7b8794"/></Feature>
                            <Feature name = "Hiking"><Track fill = "#7b8794" /></Feature>
                        </Featureholder>
                    </FeaureListHolder>
                </FeaureList>
            </HeroVideo>
        </>
    )
};
