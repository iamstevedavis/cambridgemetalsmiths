import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import React from "react"

const useStyles = makeStyles(() => ({
  footerFlexContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundColor: "black",
  },
}))

const Footer = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <footer>
      <div className={classes.footerFlexContainer}>
        <h3>{siteTitle}</h3>
      </div>
      <div className={classes.footerFlexContainer}>
        <span>
          29 Rife Ave.,Cambridge ON N3C 2G6 Phone: (519) 658-3124 Email:
          terry@cambridgemetalsmiths.com
        </span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: "",
}

export default Footer
