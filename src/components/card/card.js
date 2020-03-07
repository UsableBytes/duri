import React from 'react';
import {
	CardNameContainer,
	CardContainer,
	MediaContainer,
	CardInformationContainer,
	ActionContainer,
	FooterContainer
} from './card.style';


export const CardName = (props) => {
    return (
        <CardNameContainer>{props.children}</CardNameContainer>
    )
};

export const CardContent = (props) => {
    return (
        <CardInformationContainer >
            {props.children}
        </CardInformationContainer>
    )
};

export const CardMedia = (props) => {
    return (
        <MediaContainer >
            {props.children}
        </MediaContainer>
    )
};

export const CardInfoTitle = (props) => {
    return (
        <div >
            {props.children}
        </div>
    )
}

export const CardAction = (props) => {
    return (
        <ActionContainer >
            {props.children}
        </ActionContainer>
    )
};

export const CardFooter = (props) => {
    return (
        <FooterContainer >
            {props.children}
        </FooterContainer>
    )
};

export const Card = (props) => {
    return (
		<CardContainer {...props}>
			{props.children}
		</CardContainer>
    )
};
