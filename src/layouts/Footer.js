import React from "react"
import { Link as RouterLink } from 'gatsby-plugin-intl'
// import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const Footer = () => (
  <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" component={RouterLink} to="/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
)

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
