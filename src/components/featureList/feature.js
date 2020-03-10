import React from 'react';
import { Container, Icon, IconName, IconContainer } from './feature.style';
import Tent from '../../icons/travel/forest/tent.svg';


export const Feature = (props) => {
    return(
        <Container>
            <IconContainer>
                <Icon>
                    <Tent fill="#7b8794"/>
                </Icon>
                <IconName>Tent</IconName>
            </IconContainer>
        </Container>
    )
};
