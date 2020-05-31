import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { animated } from 'react-spring';

export const CardContainer = styled(animated.div) `
	box-shadow: ${props => props.noShadow ? 'none': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'};
	border-radius: 5px;
	max-width: 370px;
	width: auto;
	transition: box-shadow 0.5s;
`;

export const MediaContainer = styled.div `
	${tw `pt-2 pb-2`};
	width: 370px;
	margin: 0 auto;
`;

export const CardNameContainer = styled.div `
	${tw `font-bold text-xl mb-2 pt-0 pr-5 pl-5`};
`;

export const CardInformationContainer = styled.div `
	${tw `text-base pt-0 pr-5 pl-5`};
`;

export const ActionContainer = styled.div `
	${tw `max-w-sm pt-0 pr-5 pl-5 pb-5`};
`;

export const FooterContainer = styled.div `
	${tw `max-w-sm pt-0 pr-5 pl-5 pb-5`};
`;
