import styled from '@emotion/styled';

export const Container = styled.div `
    position: relative;

`;

export const ImageContainer = styled.div `
    width: 100%;
    background-size: cover;
        > div {
            height: 50vh;
            opacity: 0.8;

            @media screen and (max-width: 768px) {
                height: 80vh;
            }
        }
`;

export const OverlayText = styled.div `
	position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    font-size: calc(0.5rem + 4vmin);
    color: #ffffff;
`;

export const BackgroundImage =  styled.div `
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

`
