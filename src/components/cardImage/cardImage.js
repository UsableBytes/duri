import React from 'react';
import  { Container, InnerContainer, ContentContainer } from './cardImage.style';


export const CardImageContent = (props) => {
	return (
		<ContentContainer>
			{props.children}
		</ContentContainer>
	)
};

export const CardImage = (props) => {
	return (
		<Container>
			<InnerContainer>
				{props.children}
			</InnerContainer>
		</Container>
	)
};
