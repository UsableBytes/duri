import React from 'react';
import { Container, VideoPlayer, Overlay, OverlayContentContainer, OverlayText } from './heroVideo.style';
import heroVideo from '../../images/gallary/heroVideo.mp4';


const Video = () => {
    return (
        <VideoPlayer loop muted autoPlay>
            <source src={heroVideo} type="video/mp4"></source>
        </VideoPlayer>
    )
};

export const OverlayTextContainer = (props) => {
    return (
        <OverlayText>
            {props.children}
        </OverlayText>
    )
};

export const HeroVideo = (props) => {
    return (
        <Container>
            <Overlay />
            <Video/>
            <OverlayContentContainer>
                <OverlayTextContainer />
                {props.children}
            </OverlayContentContainer>
        </Container>
    )
};
