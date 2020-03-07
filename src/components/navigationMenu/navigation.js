import React from 'react';
import { Link } from 'gatsby';
import { NavigationContainer, NavLinksContainer, NavLink, HamburgerIcon, Input } from './navigation.style';


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
        text: 'Contact Us',
        link: '/page-2/',
        sublink: [{
            text: 'Menu31',
            link: 'Link31'
        },{
            text: 'Menu32',
            link: 'Link32'
        }]
    },{
        text: 'About Us',
        link: '/page-2/'
    }
]

export function Navigation(props) {

    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}
