import styled from '@emotion/styled';

export const TourContainer = styled.div `
    max-width: 1440px;
    width: auto;
    margin: 0 auto;
`;

export const TourHeader = styled.h1 `
    font-size: calc(0.5rem + 3vmin);
    text-align: center;
`;

export const TourSubHeader = styled.h4 `
    font-size: calc(0.1rem + 2vmin);
    text-align: center;
    font-weight: normal;
`;

export const CardTitle = styled.h4 `
    font-size: calc(0.1rem + 2vmin);
    transition: color 0.3s ease-in-out;
    margin: 0;
    margin-bottom: 0.5rem;
    &:hover {
        color: #5d55fa;
    }
`;

export const CardInfo = styled.p `
    font-size: 0.9rem;
`;

export const CardLocation = styled.span `
    font-size: 0.9rem;
    color: #7B8794;
    margin-right: 1rem;
`;

export const CardExplore = styled.button `
    width: 7.5rem;
    height: 2rem;
    color: #ffffff;
    border: none;
    background: linear-gradient(to right, #5d55fa 50%,  #1f2933 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-in-out;
    &:hover {
        background-position: left bottom;
        cursor: pointer;
    }
`;
