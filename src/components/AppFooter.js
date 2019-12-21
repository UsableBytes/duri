import React from 'react';


export function AppFooter() {
  return (
    <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </footer>
  );
}
