/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import { graphql, useStaticQuery } from "gatsby"

// import Header from "./header"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from "react-responsive"
import Footer from "./footer"
import ElevateAppBar from "./header"
import ResponsiveDrawer from "./headerSmall"

const useStyles = makeStyles(() => ({
  mainContainer: {
    margin: "auto",
    maxWidth: 1024,
    padding: "1.0875rem 1.45rem",
    backgroundColor: "lightGray",
  },
}))

const Layout = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })

  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {isDesktopOrLaptop ? (
        <ElevateAppBar siteTitle={data.site.siteMetadata.title} />
      ) : (
        <ResponsiveDrawer siteTitle={data.site.siteMetadata.title} />
      )}

      <div className={classes.mainContainer}>
        <main>{children}</main>
      </div>

      {/* <Footer siteTitle={data.site.siteMetadata.title} /> */}
      {/* <footer>
          ©
        {' '}
        {new Date().getFullYear()}
          , Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
