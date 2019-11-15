import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './NavBar';

// const useStyles = makeStyles((theme) => ({
//   flexContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 0,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     // background: 'rebeccapurple',
  //     // marginBottom: '1.45rem',
  //   }}
  // >
  <div
    style={{
      // margin: '0 auto',
      padding: '1.45rem 1.0875rem',
      // flexDirection: 'column',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <div style={{
      flex: '50%',
    }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
    <div style={{
      flex: '50%',
    }}
    >
      <NavBar />
    </div>
  </div>
  // </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
