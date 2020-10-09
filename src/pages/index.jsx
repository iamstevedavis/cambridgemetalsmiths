import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => {
  const query = useStaticQuery(graphql`
    query {
      allImageSharp(filter: {fluid: {originalName: {regex: "/^main_\\w+/"}}}) {
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

  query.allImageSharp.edges.sort(function _sort(a, b) {
    const nameA = a.node.fluid.originalName.toUpperCase() // ignore upper and lowercase
    const nameB = b.node.fluid.originalName.toUpperCase() // ignore upper and lowercase
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    // names must be equal
    return 0
  })

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <h3>
          Personalized Cast Metal Signs from Canada&#39;s Foremost Designers and
          Manufacturers
        </h3>
        <p>
          Our quality made, individually crafted Cast Metal Signs add character
          and create an elegant introduction to homes, farms, offices, cottages,
          and more. Our process uses handmade patterns to produce a relief image
          in foundry sand. Molten aluminium is poured into the mould and left to
          harden. Many finishing steps follow, to prepare the sign for our
          skilled artists, who apply the final colouring touches. The result is
          a finely crafted, personalized sign, ready to stand in a place of
          prominence and announce your home or business. Truly a statement that
          endures!
        </p>
        <div>
          {query.allImageSharp.edges.map(edge => {
            return (
              <div key={edge.node.id}>
                <Img fluid={edge.node.fluid} />
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default Home
