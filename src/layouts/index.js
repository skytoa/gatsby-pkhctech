/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppThemeOptions from "./theme";
import { AppTheme } from "../modules/constants";

import Header from "./Header";
import AppBar from './AppBar';
import Footer from './Footer';

import '../css/typography.css';

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(AppTheme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK: AppTheme.LIGHT)
  }

  const muiTheme = createMuiTheme(AppThemeOptions[theme]);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar onThemeTypeSwitch={toggleTheme}/>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
