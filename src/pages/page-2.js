import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const useStyles = makeStyles(() => ({
  // flexContainer: {
  //   // padding: '1.45rem 1.0875rem',
  //   paddingTop: '1rem',
  //   paddingBottom: '1rem',
  //   paddingLeft: '5rem',
  //   paddingRight: '5rem',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   backgroundColor: 'black',
  //   flexWrap: 'wrap',
  // },
  // link: {
  //   color: 'black',
  //   textDecoration: 'none',
  // },
  flexContainera: {
    justifyContent: 'center',
  },
  image: {
    // width: '792px',
    // height: '1030px',
  },
}));

const SecondPage = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "AllShapesSizes-17Oct2011.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 792, maxHeight: 1030) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    // 792x1030
    <Layout>
      <SEO title="Alh Shapes and Sizes" />
      <div className={classes.flexContainera}>
        <Img className={classes.image} fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>

      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default SecondPage;
