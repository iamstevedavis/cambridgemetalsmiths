import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'gatsby';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    // <div className={classes.root}>
    <MenuList className={classes.flexContainer}>
      <MenuItem component={Link} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} to="/page-2/">
        All Shapes and Sizes
      </MenuItem>
      <MenuList button onMouseOver={handleClick} onMouseOut={handleClick}>
        Inbox
        {open ? <ExpandLess /> : <ExpandMore />}
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <MenuList component="div" disablePadding>
            <MenuItem button className={classes.nested}>
              asd
            </MenuItem>
          </MenuList>
        </Collapse>
      </MenuList>
    </MenuList>
    // </div>
  );
};

export default NavBar;
