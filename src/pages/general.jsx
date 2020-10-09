import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import { isBrowser } from "react-device-detect"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubNavBar from "../components/subnavbar"
import prices from "../images/prices.pdf"

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: "center",
  },
  image: {},
  contentContainer: {
    paddingTop: "2em",
  },
}))

const pageComponents = (key, images) => {
  switch (key) {
    case "information": {
      const image1 = images.find(
        x => x.node.fluid.originalName === "information_1.jpg"
      )
      const image2 = images.find(
        x => x.node.fluid.originalName === "information_2.jpg"
      )
      return (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Img
              style={{ flexBasis: "30em", marginRight: "1em" }}
              fluid={image1.node.fluid}
            />
            <div style={{}}>
              We are a private family business operating since 1983 producing
              unique aluminum castings in the age old traditional fashion - by
              hand. The same care and attention to detail is put into every
              casting, a fact to which our customers attest through the
              complimentary notes we receive. Our products are hand made in
              Canada. We ship worldwide.
            </div>
          </div>
          <br />
          <br />
          <h3> Stages in the Making of a Cast Metal Sign</h3>
          <content>
            Our time-honoured process for creating a unique Cast Metal Sign
            starts with your idea and vision. There are many stages involved in
            the development of the finished sign, which can be divided into 3
            definable steps. It takes time, patience and skill. The creation of
            a casting begins under the careful watch of our artists, with the
            precise hand assembly of a pattern (1). Emblems and logos are
            initially carved in wood, then molded into metal for use in the
            patterns. A pattern leaves an impression in foundry sand, into which
            molten aluminum is poured ... and a one piece casting is born (2).
            Surfaces are treated, then receive only the finest, hi-tech finishes
            available (3). Each casting is a unique, one-of-a-kind creation. The
            end results is a one piece, finely crafted, personalized sign, ready
            to stand in a place of prominence and announce your home, business
            or commemoration. Truly a statement that endures!
          </content>
          <br />
          <Img style={{}} fluid={image2.node.fluid} />
          <br />
          <h3>Answers to Common Questions:</h3>
          <content>
            Our Standard Emblems fit most sign sizes, except the very smallest
            where space is restrictive. Type is set out and sized for
            readability and the most pleasing appearance. Fewer letters allow
            for larger type. For special requests, simply ask. We will
            cheerfully reply to all inquiries (custom emblems, shapes, logos,
            colours, type layouts). Usually everything is included in the prices
            listed, with the exception of lengthy statements, such as
            dedications and custom logos or emblems, which are priced upon
            request. Attach a rough sketch to your order if you wish, or call
            us.
          </content>
          <content>
            <br />
            <br />
            <b>Included with Castings: </b>
            Stainless screws are included for wall-mounted castings,
            &quot;S&quot;-hooks with hanging castings
            <br />
            <br />
            <b>Hanging Brackets: </b>
            Hanging brackets are available for most sign sizes.
            <br />
            <br />
            <b>See Price List Family Crests: </b>
            We have produced many Family Crests. You can see some examples on
            our Sign Types pages. For practicality and visual appeal, it is
            often best to use a portion or key element of a crest rather than
            the entire crest. We will require good reference, either in colour
            or black & white with all colours noted, or written outside the
            image. Fax or call us for details and custom emblem prices.
            <br />
            <br />
            <b>Posts: </b>
            Black heavy-duty steel posts with Cast Ball & Flange are usually
            available. Singles for pickup only (10&apos; lengths). Large
            quantities we do ship.
            <br />
            <br />
            <b>Custom Emblems: </b>
            Good reference is required, preferably from line drawings.
            Generally, custom emblems cost between $85 and $125. Logos and
            crests, depending on complexity range from $125 to $200. Multiple
            quantities, Street Signs and Dedications are priced on request.
            Exact duplicates cost 15% less than original. A custom emblem is a
            one-time charge.
            <br />
            <br />
            <b>Delivery Time: </b>
            In most circumstances we ship in 5 to 6 weeks from receipt of order.
            Each step in the process takes time. Try to plan early to have gifts
            ready for Christmas or special occassions. If that isn&apos;t
            possible, you may give a brochure noting that the casting will
            follow.
            <br />
            <br />
            <b>Business Hours: </b>
            8am to 6pm, N.A. Eastern Time, 7 days a week. In case we have
            stepped out when you phone either call again, write, e-mail, fax, or
            leave a recorded message. Our recorder clicks on after the 4th ring.
            Colour
            <br />
            <br />
            <b>Brochure: </b>
            For a copy, please send your name and address, e-mail or fax us.
            Many emblems are illustrated, but not all. Eventually most will be
            available to view on our site. It might be noted that a significant
            number of our customers come back to us over the years with
            additional requests - gifts for friends, relatives, and business
            associates - retirements, presents, honorariums, etc.
          </content>
        </>
      )
    }
    case "colours": {
      const image1 = images.find(
        x => x.node.fluid.originalName === "colours.jpg"
      )
      return (
        <>
          <p>
            White type on a Black background is most readable, (or Black on
            White). Forest Green with Gold is quite striking although less
            readable in low light. Standard background colours are: Black,
            White, Forest Green, Dark Brown, Ivory. For custom background
            colours the cost is $70. Exact matches cannot be guaranteed. Special
            colours on type, borders and emblems is at no extra charge.
          </p>
          <p>
            Included: Stainless screws and composite washers are included for
            wall mounted castings, &quot;S&quot;-hooks with hanging style signs.
          </p>
          <p>
            Hanging Brackets: Hanging brackets are available for most sign
            sizes.
          </p>
          <Img style={{}} fluid={image1.node.fluid} />
        </>
      )
    }
    case "prices": {
      if (isBrowser) {
        return (
          <object
            type="application/pdf"
            aria-label="Prices"
            width="100%"
            height="1257px"
            data={prices}
          />
        )
      }
      const image1 = images.find(
        x => x.node.fluid.originalName === "prices_1.jpg"
      )
      return (
        <Img
          // style={{ flexBasis: "30em", marginRight: "1em" }}
          fluid={image1.node.fluid}
        />
      )
    }
    default:
      return <></>
  }
}

const General = () => {
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

  const [currentSubMenu, setSubMenuKey] = React.useState("information")
  const subMenuItemsForPage = [
    {
      linkText: "Information",
      key: "information",
    },
    {
      linkText: "Colours",
      key: "colours",
    },
    {
      linkText: "Prices",
      key: "prices",
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
      <SEO title="General Information" />
      <div className={classes.contentContainer}>
        {pageComponents(currentSubMenu, query.allImageSharp.edges)}
      </div>
    </Layout>
  )
}

export default General
