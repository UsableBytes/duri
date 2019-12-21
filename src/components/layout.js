import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='layout'>
      <AppHeader siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <AppFooter />
    </div>

  );
};


export default Layout;
