import styled from '@emotion/styled';

export const NavigationContainer = styled.nav `
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    overflow: auto;
    flex-flow: row-reverse;
    height: 15vh;
    &:before {
        content: "";
        height: 15vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #1f2933;
        opacity: 0.5;
    }
`;

export const NavLink = styled.li `
    margin: 0;
    margin-right: 1.5rem;

        a {
            color: #ffffff;
            text-decoration: none;
            text-shadow: none;
            font-size: 1.2rem;
            background-color: none;
        }
`;

export const Input = styled.input `
    display: block;
    width: 2rem;
    height: 1.75rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    opacity: 0;
    z-index: 2;

    &:checked ~ ${HamburgerIcon} {
        /* transform: rotate(45deg) translate(-2px, -1px); */
        /* background: green; */
    }
    &:checked ~ ul {
        transform: translateY(-100%);
    }

    @media(min-width: 768px) {
        width: 100%;
        height: auto;
        display: none;
    }
`;

export const NavLinksContainer = styled.ul `
    list-style: none;
    margin: none;
    transform-origin: 0% 0%;
    transform: translateY(100%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    z-index: 2;

    background-color: #1f2933;

    @media(min-width: 768px) {
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        top: 0;
        left: 0;
        transform: none;
        margin: none;
    }
`;

export const HamburgerIcon = styled.span `
    display: block;
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.3215rem;
    position: relative;
    top: 1rem;
    left: 1rem;
    background: green;
    border-radius: 0.1875rem;
    z-index: 1;
    transform-origin: 0.25rem 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.55s ease-in-out;

    &:first-of-type {
        transform-origin: 0% 0%;
    }
    &:nth-last-of-type(2) {
        transform-origin: 0% 100%;
    }
    @media(min-width: 768px) {
        width: 100%;
        height: auto;
        display: none;
    }
`;
