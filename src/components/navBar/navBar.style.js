import styled from '@emotion/styled';

export const NavContainer = styled.div `
    position: absolute;
    max-height: 8rem;
    height: calc(1rem + 5vmin);
    left:0;
    right: 0;
    max-width: 1440px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        width: 100vw;
        background-color: #1f2933;
        z-index: 999;
        height: 4rem;

        @media screen and (min-width: 768px) {
            max-height: 8rem;
            opacity: 0.5;
            height: calc(1rem + 10vmin);
            margin: 0 auto;
        }
    }
    @media screen and (min-width: 768px) {
        height: 4rem;
    }
`;

export const OrganisationName = styled.span `
    font-size: 2rem;
    cursor: pointer;
    z-index: 999;
    position:relative;
`;

export const HamburgerIcon = styled.span `
    display: block;
    width: 2rem;
    height: 0.3rem;
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 2px;
    position: relative;
    top: 2rem;
    left: 1rem;
    z-index: 999;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Input = styled.input `
    position: absolute;
    top: 2rem;
    left: 1rem;
    display: block;
    height: 1rem;
    width: 1.75rem;
    opacity: 0;
    z-index: 999;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display:  none;
    }

    &:checked {
        ~ ul {
            max-height: 18.75rem;
        }
    }
`;

export const NavLinksContainer = styled.ul `
    list-style: none;
    display: block;
    transform: translateY(2.8rem);
    max-height: 0;
    overflow: hidden;
    background-color: #1f2933;
    transition: all 0.8s ease-in-out;
    z-index: 99;
    margin-left: 0;
    cursor: pointer;
    height: 8rem;

    @media screen and (min-width: 768px) {
       display: inline-flex;
       float: right;
       flex-direction: row-reverse;
       max-height: 8rem;
       height: 8rem;
       align-items: center;
       transform: none;
       background: none;
    }
`;


export const NavLink = styled.li `
    margin-left: 1rem;
    > a {
        text-decoration: none;
        color: #ffffff;
        text-shadow: none;
        background-image: none;
        transition: color 0.3s ease-out;

        &:hover {
            color: #5d55fa;
        }
    }

    @media screen and (min-width: 768px) {
        margin-right: 1rem;
        z-index: 999;
        width: auto;
        margin-left: 0;
    }
`;
