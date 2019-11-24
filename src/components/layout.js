/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';
import './layout.css';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightGreen',
  },
  mainContainer: {
    margin: '0 auto',
    maxWidth: 1024,
    padding: '1.0875rem 1.45rem',
    backgroundColor: 'lightGray',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={classes.mainContainer}>
        <main>{children}</main>
      </div>
      {/* <Footer siteTitle={data.site.siteMetadata.title} /> */}
      {/* <footer>
          ©
        {' '}
        {new Date().getFullYear()}
          , Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
