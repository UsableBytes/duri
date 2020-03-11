import React, { useState } from 'react';
import { TabList, Tab, TabContent, TabListHolder } from './navigationTab.style';


export const NavigationTab = (props) => {

    const [currentTabIndex, setCurrentTabIndex] =  useState(0);
    let tabList = [];
    props.children.forEach((elem)=> {
        tabList.push(elem.props.label)
    });

    const handleTabClick = (elem, index) => {
      setCurrentTabIndex(() => index);
    }

    return (
        <>
            <TabList>
                <TabListHolder>
                {tabList.map((elem, index)=> {
                    return <Tab key={index} onClick = {() => handleTabClick(elem,index)} isActive = {index === currentTabIndex ? 'true': 'false'} >{elem}</Tab>
                })}
                </TabListHolder>
            </TabList>
            <TabContent>
                {props.children[currentTabIndex].props.children}
            </TabContent>
        </>
    )
};
