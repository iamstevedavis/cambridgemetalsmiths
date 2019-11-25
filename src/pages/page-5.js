import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { isBrowser } from 'react-device-detect';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SubNavBar from '../components/subnavbar';
import prices from '../images/prices.pdf';

const useStyles = makeStyles(() => ({
  flexContainera: {
    justifyContent: 'center',
  },
  image: {},
  contentContainer: {
    paddingTop: '2em',
  },
}));

const pageComponents = (key) => {
  switch (key) {
    case 'colours':
      return (
        <>
          <p>
            White type on a Black background is most readable, (or Black on White). Forest Green
            with Gold is quite striking although less readable in low light. Standard background
            colours are: Black, White, Forest Green, Dark Brown, Ivory. For custom background
            colours the cost is $70. Exact matches cannot be guaranteed. Special colours on type,
            borders and emblems is at no extra charge.
          </p>
          <p>
            Included: Stainless screws and composite washers are included for wall mounted castings,
            &quot;S&quot;-hooks with hanging style signs.
          </p>
          <p>
            Hanging Brackets: Hanging brackets are available for most sign sizes.
          </p>
        </>
      );
    case 'prices':
      if (isBrowser) {
        return (<object type="application/pdf" aria-label="" width="100%" height="1257px" data={prices} />);
      }
      break;
    default:
      return (<></>);
  }
};

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

  const [currentSubMenu, setSubMenuKey] = React.useState('information');
  const subMenuItemsForPage = [
    {
      linkText: 'Information',
      key: 'information',
    },
    {
      linkText: 'Colours',
      key: 'colours',
    },
    {
      linkText: 'Prices',
      key: 'prices',
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
        {pageComponents(currentSubMenu)}
        <div>
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
