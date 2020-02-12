import React from "react"
import { Link } from 'gatsby-plugin-intl'
// import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FooterNavbar from '../components/Footer/FooterNavbar';

const useStyles = makeStyles(theme => ({
  footer: {
    background: '#fff',
    borderTop: '10px solid #E6E7EB',
    borderBottom: '10px solid #E6E7EB',
    borderRight: '10px solid #E6E7EB',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <FooterNavbar />
            <Typography variant="body2" color="textSecondary">
              {`Copyright © ${new Date().getFullYear()} `}
              <Link
                to="/"
              >
                PKH Technologies
              </Link>
              {'. All rights reserved.'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            Test
          </Grid>
        </Grid>
      </Container>
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
