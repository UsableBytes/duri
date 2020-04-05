import React from 'react';

import { HeroImage } from '../components/heroImage/heroImage';
import { NavigationTab } from '../components/navigationTab/navigationTab';
import { Accordian, AccordianTab } from '../components/accordian/accordian';

import { TourContainer, NavTab, } from "../pageComponent/tour/tour.style";
const TourPage = ({data}) => {
    return (
        <TourContainer>
           <HeroImage/>
           <NavigationTab>
            <NavTab label ="Overview">
                OverView Tab Content
            </NavTab>
            <NavTab label ="Itenary">
                <Accordian>
					<AccordianTab label= "Accordian Tab 1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel enim inventore ut quod. Repellat temporibus laborum illum ex reiciendis?
					</AccordianTab>
					<AccordianTab label= "Accordian Tab 2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel enim inventore ut quod. Repellat temporibus laborum illum ex reiciendis?
					</AccordianTab>
					<AccordianTab label= "Accordian Tab 3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel enim inventore ut quod. Repellat temporibus laborum illum ex reiciendis?
					</AccordianTab>
					<AccordianTab label= "Accordian Tab 4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel enim inventore ut quod. Repellat temporibus laborum illum ex reiciendis?
					</AccordianTab>
				</Accordian>
            </NavTab>
            <NavTab label ="Accomodation">
                Accomodation Tab Content
            </NavTab>
            <NavTab label ="Gallary">
                Gallary Tab Content
            </NavTab>
           </NavigationTab>
        </TourContainer>
    )
}

export default TourPage;