import React from "react"
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import { Carousal } from '../components/carousel/carousel';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Carousal/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
