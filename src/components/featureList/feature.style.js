import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';


export const Container = styled.div `
    ${tw `inline-block relative`}
    background: #1f2933;
    display: table-cell;
    width: 200px;

    &::after {
        content: '';
        position: absolute;
        left: -1px;
        top: 1rem;
        bottom: 1rem;
        background: #000;
        width: 1px;
    }
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
    padding: 1.5rem;
    cursor: pointer;
        span {
             svg {
                animation: ${bounceBack} 0.3s ease forwards;
             }
        }
        span + span{
                color: #7b8794;
            }
        }

    &:hover {
        cursor: pointer;
        > span {
             svg {
                animation: ${bounce} 0.3s ease forwards;
             }
        }
        span + span {
            color: #5d55fa;
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
