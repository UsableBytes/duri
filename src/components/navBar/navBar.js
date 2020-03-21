import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, NavContainer, NavLinksContainer, NavLink, HamburgerIcon, Input, LogoContainer } from './navBar.style';
import logo from '../../images/Logo.png';

const Navlinks =  [
    {
        text: 'Contact Us',
        link: '/page-2/'
    },{
        text: 'Plan Your Holiday',
        link: '/page-2/'
    },{
        text: 'Trevel Blog',
        link: '/page-2/'
    },{
        text: 'Tours',
        link: '/page-2/'
    }
]

export const NavBar = () => {

    return (
        <Wrapper>
            <NavContainer>
                <HamburgerIcon />
                <HamburgerIcon />
                <HamburgerIcon />
                <LogoContainer Link to="/home">
                    <img src={logo} alt="Logo" />
                </LogoContainer>
                <Input type="checkbox" />
                <NavLinksContainer>
                    { Navlinks.map((elem, index)=> {
                        return (<NavLink key= {index}>
                            <Link to={elem.link}>{elem.text}</Link>
                        </NavLink>)
                    })}
                </NavLinksContainer>
            </NavContainer>
        </Wrapper>

    )
};
