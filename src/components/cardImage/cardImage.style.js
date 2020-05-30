import styled from '@emotion/styled';
import tw from 'tailwind.macro';


export const Container = styled.div `
 ${tw `relative rounded overflow-hidden`}

    &:hover {
        > div {
            &::before {
                display: block;
            }
            &::after {
                display: block;
            }
        }
        span {
            display: block;
        }
    }
`;

export const InnerContainer =  styled.div `
    ${tw ` bg-center w-full`}
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.5s ease-in-out;
    }

    &::before {
        content: "";
        display: none;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(52, 73, 94, 0.5);
    }
`;

export const ContentContainer = styled.span `
    display: none;
    font-size: 1rem;
    font-family: sans-serif;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 2rem;
    cursor: pointer;
`;
