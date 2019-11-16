import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  footerFlexContainer: {
    // padding: '1.45rem 1.0875rem',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'cyan',

  },
}));

const Footer = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footerFlexContainer}>
        <h3>{siteTitle}</h3>
      </div>
      <div className={classes.footerFlexContainer}>
        <span>29 Rife Ave.,Cambridge ON  N3C 2G6    Phone: (519) 658-3124    Email: cherie_shannon2@hotmail.com</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;


{ /* <div className={classes.flexContainer}>
<h3 style={{ margin: 0 }}>
  <Link
    to="/"
    className={classes.link}
  > }
{ {siteTitle} }
<Img className={classes.image} fluid={data.placeholderImage.childImageSharp.fluid} />
{ </Link>
</h3>
<NavBar />
</div> */ }
