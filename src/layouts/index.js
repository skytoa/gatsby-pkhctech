/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppThemeOptions from "./theme";
import { APP_THEME } from "../types/theme";

import AppBar from '../components/Appbar';
import Footer from './Footer';

import '../css/typography.css';

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(APP_THEME.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === APP_THEME.LIGHT ? APP_THEME.DARK: APP_THEME.LIGHT)
  }

  const muiTheme = createMuiTheme(AppThemeOptions[theme]);

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <AppBar onThemeTypeSwitch={toggleTheme} />
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
