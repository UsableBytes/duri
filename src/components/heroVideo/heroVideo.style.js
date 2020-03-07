import styled from '@emotion/styled';

export const Container = styled.div `
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;

	@media (max-width: 960px) {
		width: 100%;
		height: 100vh;
	}
`;

export const Overlay = styled.div `
	position: absolute;
	top: 0;
	left: 0;
	background: #e2e2e2;
	opacity: 0.6;
	height: 100%;
`;

export const OverlayContentContainer = styled.div ``;

export const OverlayText = styled.div `
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translate(-70%, -50%);
`;

export const VideoPlayer = styled.video `
   width: 100%;
   height: 100%;
   object-fit: cover;
`;
