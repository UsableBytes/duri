import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';


export const Container = styled.div `
    ${tw `inline-block relative`}
    border: 1px solid black;
    background: #1f2933;
`;

const bounce = keyframes `
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-10px);
        fill: #5d55fa;
    }
`;

const bounceBack = keyframes `
    0% {
        transform: translateY(0);
        fill: #5d55fa;
    }
    100% {
        transform: translateY(10px);
    }
`;

export const IconContainer = styled.div `
    text-align: center;
    padding: 2vmin calc(0.5rem + 2vmin);
    animation: ${bounceBack} 0.3s ease forwards;
    &:hover {
        cursor: pointer;
         ${Icon} {
             svg {
                animation: ${bounce} 0.3s ease forwards;
             }
        }
         ${IconName} {
            span {
                color: #5d55fa;
            }
        }
    }
`;

export const Icon = styled.span `
    width: 9.5vw;
    text-align: center;
    display: block;
    box-sizing: border-box;
`;

export const IconName = styled.span `
    color: #7b8794;
    display: block;
`;
