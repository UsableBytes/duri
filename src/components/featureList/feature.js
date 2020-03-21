import React from 'react';
import { Container, Icon, IconName, IconContainer } from './feature.style';


export const Feature = (props) => {
    return(
        <Container>
            <IconContainer>
                <Icon>
                    {props.children}
                </Icon>
                <IconName>{props.name}</IconName>
            </IconContainer>
        </Container>
    )
};
