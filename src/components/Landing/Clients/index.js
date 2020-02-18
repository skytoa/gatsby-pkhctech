import React from 'react';
import { HeaderTitle } from '../../Typography';
import { makeStyles, Grid } from '@material-ui/core';
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import ClientsItem from './ClientsItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '60px',
  },
}));

const LandingClients = () => {
  const intl = useIntl();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      wordpressPage(slug: {eq: "home-page"}) {
        acf {
          brand {
            link
            name
            image {
              localFile {
                childImageSharp {
                  fixed(height: 160) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          brand_2 {
            link
            name
            image {
              localFile {
                childImageSharp {
                  fixed(height: 160) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
          brand_3 {
            link
            name
            image {
              localFile {
                childImageSharp {
                  fixed(height: 160) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <HeaderTitle to="/" title={intl.formatMessage({ id: "our_clients.title" })} />
      <Grid container alignItems="center" justify="center">
        <ClientsItem
          name={data.wordpressPage.acf.brand.name}
          image={data.wordpressPage.acf.brand.image.localFile.childImageSharp.fixed}
          to={data.wordpressPage.acf.brand.link}
        />
        <ClientsItem
          name={data.wordpressPage.acf.brand_2.name}
          image={data.wordpressPage.acf.brand_2.image.localFile.childImageSharp.fixed}
          to={data.wordpressPage.acf.brand_2.link}
        />
        <ClientsItem
          name={data.wordpressPage.acf.brand_3.name}
          image={data.wordpressPage.acf.brand_3.image.localFile.childImageSharp.fixed}
          to={data.wordpressPage.acf.brand_3.link}
        />
      </Grid>
    </div>
  )
}

export default LandingClients;
