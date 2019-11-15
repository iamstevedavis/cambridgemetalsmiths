import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
  flexContainer: {
    padding: '1.45rem 1.0875rem',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'cyan',
    flexWrap: 'wrap',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <header>
      <div className={classes.flexContainer}>
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            className={classes.link}
          >
            {siteTitle}
          </Link>
        </h3>
        <NavBar />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
