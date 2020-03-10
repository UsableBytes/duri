import React from 'react';
import { Link } from 'gatsby';
import { NavContainer, NavLinksContainer, NavLink, HamburgerIcon, Input } from './navBar.style';


const Navlinks =  [
    {
        text: 'Tours',
        link: '/page-2/',
        sublink: [{
            text: 'Menu11',
            link: 'page-2/'
        },{
            text: 'Menu12',
            link: 'Link12'
        }]

    },{
        text: 'About Us',
        link: '/page-2/',
        sublink: [{
            text: 'Menu21',
            link: 'Link21'
        },{
            text: 'Menu22',
            link: 'Link22'
        }]
    },{
        text: 'Blog',
        link: '/page-2/',
        sublink: [{
            text: 'Menu31',
            link: 'Link31'
        },{
            text: 'Menu32',
            link: 'Link32'
        }]
    },{
        text: 'Carrier',
        link: '/page-2/'
    }
]

export const NavBar = () => {

    return (
        <NavContainer>
                <HamburgerIcon />
                <HamburgerIcon />
                <HamburgerIcon />
            <Input type="checkbox" />
            <NavLinksContainer>
                { Navlinks.map((elem, index)=> {
                    return (<NavLink key= {index}>
                        <Link to={elem.link}>{elem.text}</Link>
                    </NavLink>)
                })}
            </NavLinksContainer>
        </NavContainer>
    )
};
