import { Link, graphql, useStaticQuery } from "gatsby"
import { MenuItem, MenuList } from "@material-ui/core"

import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  // flexContainer2: {
  //   display: "flex",
  //   flexDirection: "row",
  //   padding: 0,
  //   backgroundColor: "black",
  //   flexWrap: "wrap",
  //   color: "white",
  // },
  // flexContainer: {
  //   paddingTop: "1rem",
  //   paddingBottom: "1rem",
  //   paddingLeft: "5rem",
  //   paddingRight: "5rem",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   backgroundColor: "black",
  //   flexWrap: "wrap",
  // },
  image: {
    // width: "176px",
    // height: "126px",
    // minWidth: "750px",
    // maxWidth: "300px"
    width: "278px",
    // height: "206px"
  },
  h1: {
    color: "white",
    display: "flex",
    marginTop: "1em",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Cambridge_Lion_Gold.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className={classes.flexContainer}>
        {/* {siteTitle} */}
        <Link component={Link} to="/">
          <Img
            className={classes.image}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </Link>
        <h1 className={classes.h1}>{siteTitle}</h1>
        <MenuList className={classes.flexContainer2}>
          <MenuItem component={Link} to="/shapesandsizes/">
            All Shapes and Sizes
          </MenuItem>
          <MenuItem component={Link} to="/emblemsandmotifs/">
            Emblems & Motifs
          </MenuItem>
          <MenuItem component={Link} to="/signtypes/">
            Sign Types
          </MenuItem>
          <MenuItem component={Link} to="/general/">
            General Information
          </MenuItem>
        </MenuList>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
