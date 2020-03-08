import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useIntl } from "gatsby-plugin-intl";
import { LANGUAGE } from '../../types/language';

const TransitionAniLink = ({ to, children, ...rest }) => {
  const intl = useIntl();
  const link = intl.locale === LANGUAGE.en.key ? `${to}` : `/${intl.locale}${to}`;

  return (
    <AniLink {...rest} to={link} fade duration={0}>
      {children}
    </AniLink>
  )
}

export default TransitionAniLink;
