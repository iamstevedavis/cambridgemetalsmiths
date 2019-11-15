/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    // padding: 0,
    backgroundColor: 'lightGreen',
  },
  flexContainer2: {
    padding: '1.45rem 1.0875rem',
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'cyan',
  },
  mainContainer: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
    backgroundColor: 'lightGray',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

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
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className={classes.mainContainer}>
        <main>{children}</main>
      </div>
      <footer>
          ©
        {' '}
        {new Date().getFullYear()}
          , Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
