import React from "react"
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import { Carousel } from '../components/carousel/carousel';
import { NavigationTab } from '../components/navigationTab/navigationTab';

const SecondPage = () => (
  <Layout>
      <SEO title="Page two" />
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2</p>
				<NavigationTab>
					<div label ="Overview">
						OverView Tab Content
					</div>
					<div label ="Itenary">
						Itenary Itenary Content
					</div>
					<div label ="Accomodation">
						Accomodation Tab Content
					</div>
					<div label ="Gallary">
						Gallary Tab Content
					</div>
				</NavigationTab>
			<Carousel/>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
