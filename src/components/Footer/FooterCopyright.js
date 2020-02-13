import React from 'react';
import { Link } from 'gatsby-plugin-intl'
import Typography from '@material-ui/core/Typography';
const FooterCopyright = () => {

  const getFullYear = new Date().getFullYear();

  return (
    <Typography variant="body2" color="textSecondary" style={{ margin: '36px 0'}}>
      {`Copyright © ${getFullYear} `}
      <Link
        to="/"
      >
        PKH Technologies
      </Link>
      {'. All rights reserved.'}
    </Typography>
  )
}

export default FooterCopyright;