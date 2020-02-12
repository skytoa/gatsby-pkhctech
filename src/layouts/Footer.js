import React from "react"
import { Link } from 'gatsby-plugin-intl'
// import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    background: '#fff',
  },
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${new Date().getFullYear()} `}
        <Link
          to="/"
        >
          PKH Technologies
        </Link>
        {'. All rights reserved.'}
      </Typography>
    </footer>
  )
}

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
