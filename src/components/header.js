import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
  flexContainer: {
    // padding: '1.45rem 1.0875rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flexWrap: 'wrap',
  },
  // link: {
  //   color: 'black',
  //   textDecoration: 'none',
  // },
  image: {
    width: '176px',
    height: '126px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "cambridgeSign.png" }) {
      childImageSharp {
        fluid(maxWidth: 278, maxHeight: 206) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <header>
      <div className={classes.flexContainer}>
        {/* <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            className={classes.link}
          > */}
        {/* {siteTitle} */}
        <Link component={Link} to="/">
          <Img className={classes.image} fluid={data.placeholderImage.childImageSharp.fluid} />
        </Link>
        {/* </Link>
        </h3> */}
        <NavBar />
      </div>
    </header>
  );
};

Header.propTypes = {
  // siteTitle: PropTypes.string,
};

Header.defaultProps = {
  // siteTitle: '',
};

export default Header;
