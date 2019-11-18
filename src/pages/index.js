import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: 'center',
  },
  image: {},
}));

const IndexPage = () => {
  const classes = useStyles();
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
`);

  return (
    <Layout>
      <SEO title="Home" />
      <h3>Personalized Cast Metal Signs from Canada&#39;s Foremost Designers and Manufacturers</h3>
      <p>
        Our quality made, individually crafted Cast Metal Signs add character and create an elegant
        introduction to homes, farms, offices, cottages, and more. Our process uses handmade patterns
         to produce a relief image in foundry sand. Molten aluminium is poured into the mould and
         left to harden. Many finishing steps follow, to prepare the sign for our skilled artists,
         who apply the final colouring touches. The result is a finely crafted, personalized sign,
         ready to stand in a place of prominence and announce your home or business.
         Truly a statement that endures!
      </p>
      <div>
        {/* These will be out of order due to the fact that
        they are named main_1 to 4 and not sorted. */}
        {query.allImageSharp.edges.map((edge) => {
          const { originalName } = edge.node.fluid;
          if (originalName.includes('main')) {
            return (<div><Img fluid={edge.node.fluid} /></div>);
          }
          return (<></>);
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

// https://github.com/gatsbyjs/gatsby/issues/4843
// This query can be pasted in the graphiql console
// and if that bug above is resolved will return just main_x items
// const data = useStaticQuery(graphql`
// query {
//   allImageSharp(filter: {fluid: {originalName: {regex: "/^main_\\w+/gm"}}}) {
//     edges {
//       node {
//         id
//         fluid {
//           base64
//           src
//           aspectRatio
//           src
//           srcSet
//         }
//       }
//     }
//   }
// }
// `);
// {data.allImageSharp.edges.map((edge) => (<div><Img fluid={edge.node.fluid} /></div>))}
//
