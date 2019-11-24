import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SubNavBar from '../components/subnavbar';

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: 'center',
  },
  image: {},
  contentContainer: {
    paddingTop: '2em',
  },
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

  const [currentSubMenu, setSubMenuKey] = React.useState('forTheProfessions');
  const subMenuItemsForPage = [
    {
      linkText: 'For the Professions',
      key: 'forTheProfessions',
    },
    {
      linkText: 'Golf Course',
      key: 'golfCourse',
    },
    {
      linkText: 'Mounting Methods',
      key: 'mountingMethods',
    },
    {
      linkText: 'Municipal and BIA',
      key: 'municipalAndBia',
    },
  ];
  const onSubMenuItemClick = (subMenuKey) => {
    if (currentSubMenu !== subMenuKey) {
      setSubMenuKey(subMenuKey);
    }
  };

  return (
    <Layout>
      <SubNavBar
        onSubMenuItemClick={onSubMenuItemClick}
        subMenuItems={subMenuItemsForPage}
      />
      <SEO title="Home" />
      <div className={classes.contentContainer}>
        <div>
          {/*
            * These will be out of order due to the fact that
            * they are named main_1 to 4 and not sorted.
            */}
          {query.allImageSharp.edges.map((edge) => {
            const { originalName } = edge.node.fluid;
            if (originalName.includes(currentSubMenu)) {
              return (<div><Img fluid={edge.node.fluid} /></div>);
            }
            return (<></>);
          })}
        </div>
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
