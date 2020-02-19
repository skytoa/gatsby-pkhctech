import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useIntl } from "gatsby-plugin-intl";

const TransitionAniLink = ({ to, children, ...rest }) => {
  const intl = useIntl();
  const link = intl.locale === 'en' ? `${to}` : `/${intl.locale}${to}`;

  return (
    <AniLink {...rest} cover bg="#663399" direction="right" to={link} duration={1}>
      {children}
    </AniLink>
  )
}

export default TransitionAniLink;
