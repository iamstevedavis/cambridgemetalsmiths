import { MenuItem, MenuList } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import React from "react"

const useStyles = makeStyles(() => ({
  flexContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    padding: 0,
    backgroundColor: "lightGray",
    flexWrap: "wrap",
    color: "black",
    borderWidth: "thin",
    borderStyle: "solid",
    borderTopStyle: "none",
    borderLeftStyle: "none",
    borderRightStyle: "none",
  },
}))

const SubNavBar = props => {
  const classes = useStyles()
  const { subMenuItems, onSubMenuItemClick } = props
  const [currentKey, setCurrentKey] = React.useState(subMenuItems[0].key)

  const onClick = key => {
    setCurrentKey(key)
    onSubMenuItemClick(key)
  }

  const items = []

  subMenuItems.forEach(item => {
    items.push(
      <MenuItem
        key={item.key}
        selected={currentKey === item.key}
        onClick={() => onClick(item.key)}
      >
        {item.linkText}
      </MenuItem>
    )
  })

  return <MenuList className={classes.flexContainer}>{items}</MenuList>
}

SubNavBar.propTypes = {
  subMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSubMenuItemClick: PropTypes.func.isRequired,
}

export default SubNavBar
