import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';


export const Container = styled.div `
    ${tw `inline-block relative`}
    border: 1px solid black;
    background: #1f2933;
    display: table-cell;
    width: 200px;
`;

const bounce = keyframes `
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-0.2rem);
        fill: #5d55fa;
    }
`;

const bounceBack = keyframes `
    from {
        transform: translateY(0);
        fill: #5d55fa;
    }
    to {
        transform: translateY(0.2rem);
    }
`;

export const IconContainer = styled.div `
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
        ${Icon} {
             svg {
                animation: ${bounceBack} 0.3s ease forwards;
             }
        }
        ${IconName} {
            span {
                color: #7b8794;
            }
        }

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
    font-size: 1.5rem;
    text-align: center;
    display: block;
    box-sizing: border-box;

    @media screen and (min-width: 1600px){
        font-size: 2.8rem;
    }
`;

export const IconName = styled.span `
    color: #7b8794;
    display: block;
`;
