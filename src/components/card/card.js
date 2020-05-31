import React from 'react';
import { useSpring } from 'react-spring';
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
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.05]
    const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
		<CardContainer {...props}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: prop.xys.interpolate(trans) }}
        >
			{props.children}
		</CardContainer>
    )
};
