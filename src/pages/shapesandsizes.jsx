import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: "center",
  },
}))

const ShapesAndSizes = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "AllShapesSizes-17Oct2011.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 792, maxHeight: 1030) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="All Shapes and Sizes" />
      <div className={classes.flexContainera}>
        <Img
          className={classes.image}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
}

export default ShapesAndSizes
