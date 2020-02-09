import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubNavBar from "../components/subnavbar"

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: "center",
  },
  image: {},
  contentContainer: {
    paddingTop: "2em",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const query = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const [currentSubMenu, setSubMenuKey] = React.useState("birdsAndWaterfowl")
  const subMenuItemsForPage = [
    {
      linkText: "Birds & Waterfowl",
      key: "birdsAndWaterfowl",
    },
    {
      linkText: "Animals & Farm",
      key: "animalsAndFarm",
    },
    {
      linkText: "Dogs & Cats",
      key: "dogsAndCats",
    },
    {
      linkText: "Aquatic & Nautical",
      key: "aquaticAndNautical",
    },
    {
      linkText: "Flowers & Fruit",
      key: "flowersAndFruit",
    },
    {
      linkText: "Misc.",
      key: "misc",
    },
  ]
  const onSubMenuItemClick = subMenuKey => {
    if (currentSubMenu !== subMenuKey) {
      setSubMenuKey(subMenuKey)
    }
  }

  return (
    <Layout>
      <SubNavBar
        onSubMenuItemClick={onSubMenuItemClick}
        subMenuItems={subMenuItemsForPage}
      />
      <SEO title="Emblems and Motifs" />
      <div className={classes.contentContainer}>
        <div>
          {/*
           * These will be out of order due to the fact that
           * they are named main_1 to 4 and not sorted.
           */}
          {query.allImageSharp.edges.map(edge => {
            const { originalName } = edge.node.fluid
            if (originalName.includes(currentSubMenu)) {
              return (
                <div>
                  <Img fluid={edge.node.fluid} />
                </div>
              )
            }
            return <></>
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
