import { MenuItem, MenuList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'black',
    flexWrap: 'wrap',
    color: 'white',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <MenuList className={classes.flexContainer}>
      <MenuItem component={Link} to="/page-2/">
        All Shapes and Sizes
      </MenuItem>
      <MenuItem component={Link} to="/page-3">
        Emblems & Motifs
      </MenuItem>
      <MenuItem component={Link} to="/">
        Sign Types
      </MenuItem>
      <MenuItem component={Link} to="/">
        Colours & Pricing
      </MenuItem>
    </MenuList>
  );
};

export default NavBar;

{ /* <MenuList button onMouseOver={handleClick} onMouseOut={handleClick}>
        Inbox
        {open ? <ExpandLess /> : <ExpandMore />}
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <MenuList component="div" disablePadding>
            <MenuItem button className={classes.nested}>
              asd
            </MenuItem>
          </MenuList>
        </Collapse>
      </MenuList> */ }
