import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import NavBar from "./navbar"

const useStyles = makeStyles(() => ({
  flexContainer: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "5rem",
    paddingRight: "5rem",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "black",
    flexWrap: "wrap",
  },
  image: {
    width: "176px",
    height: "126px",
  },
}))

const Header = () => {
  const classes = useStyles()
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
        <NavBar />
      </div>
    </header>
  )
}

Header.propTypes = {
  // siteTitle: PropTypes.string,
}

Header.defaultProps = {
  // siteTitle: '',
}

export default Header
