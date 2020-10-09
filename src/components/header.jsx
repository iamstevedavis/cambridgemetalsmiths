import { Link, graphql, useStaticQuery } from "gatsby"

/* eslint-disable react/jsx-props-no-spreading */
import AppBar from "@material-ui/core/AppBar"
import Grid from "@material-ui/core/Grid"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  appBarLarge: {
    backgroundColor: "black",
    padding: "1%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": { background: "DarkGray" },
  },
  headerImage: {
    width: "278px",
    height: "75px",
  },
})

export default function ElevateAppBar(props) {
  const classes = useStyles()
  const { siteTitle } = props
  const headerLogoData = useStaticQuery(graphql`
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
    <>
      <AppBar id="one" className={classes.appBarLarge} position="sticky">
        <Toolbar>
          <Grid container direction="row" spacing={3} xs={5}>
            <Grid item spacing={1}>
              <Img
                className={classes.headerImage}
                fluid={headerLogoData.placeholderImage.childImageSharp.fluid}
              />
            </Grid>
            <Grid item spacing={1}>
              <Typography variant="h6" style={{ lineHeight: "75px" }}>
                {siteTitle}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            xs={7}
            spacing={3}
            style={{ justifyContent: "flex-end" }}
          >
            <Grid item>
              <Link
                className={classes.link}
                activeStyle={{ color: "LightBlue" }}
                to="/"
              >
                Home
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                activeStyle={{ color: "LightBlue" }}
                to="/shapesandsizes/"
              >
                All Shapes and Sizes
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                activeStyle={{ color: "LightBlue" }}
                to="/emblemsandmotifs/"
              >
                Emblems & Motifs
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                activeStyle={{ color: "LightBlue" }}
                to="/signtypes/"
              >
                Sign Types
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                activeStyle={{ color: "LightBlue" }}
                to="/general/"
              >
                General Information
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

ElevateAppBar.propTypes = {
  siteTitle: PropTypes.string,
}

ElevateAppBar.defaultProps = {
  siteTitle: "Cambridge Metalsmiths",
}
