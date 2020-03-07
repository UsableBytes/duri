import styled from '@emotion/styled';

export const FeaureList = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    overflow-x: scroll;
`;

export const IntialText = styled.div `
    color: rgb(196, 198, 255);
    font-size: calc(0.2rem + 3vmin);
`;

export const MainText = styled.div `
    color: #ffffff;
    font-size: calc(0.5rem + 8vmin);
    letter-spacing: 2px;
    font-weight: bold;
`;

export const SubText = styled.div `
    color: #ffffff;
    font-size: calc(0.2rem + 3.5vmin);
`;

export const Button = styled.button `
    width: calc(3rem + 12vmin);
    height: calc(1rem + 3vmin);
    background-color: #ffffff;
    color: #000000;
    font-size: calc(0.2rem + 2vmin);;
    letter-spacing: 2px;
    font-weight: bold;
    margin-top: 3rem;
    cursor: pointer;
`;
