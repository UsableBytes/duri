import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to the homepage of Duri holidays</p>
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  );
}
