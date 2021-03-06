/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

import { graphql, useStaticQuery } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Footer from "./footer"
import ElevateAppBar from "./header"

const useStyles = makeStyles(() => ({
  mainContainer: {
    margin: "auto",
    maxWidth: 1024,
    padding: "1.0875rem 1.45rem",
    backgroundColor: "lightGray",
    minHeight: "1024px",
  },
}))

const Layout = ({ children }) => {
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
      <CssBaseline />
      <ElevateAppBar siteTitle={data.site.siteMetadata.title} />

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
