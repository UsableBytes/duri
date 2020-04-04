import React, { useState } from 'react';
import { Container, AccordianTabContainer, TabDetails, Tab } from './accordian.style';

export const AccordianTab = (props) => {

    const [isActive, setIsActive] = useState(false);
    console.log(props)
    const handleTabClick = (e) => {
        setIsActive((isActive) => !isActive);
    }

    return (
        <AccordianTabContainer>
            <Tab isActive = {isActive} onClick = {handleTabClick}>{props.label}</Tab>
            <TabDetails isActive = {isActive}>{props.children}</TabDetails>
        </AccordianTabContainer>
    )
};

export const Accordian = (props) => {
    console.log(props.children)
    return (
        <Container>
            {props.children}
        </Container>
    )
};