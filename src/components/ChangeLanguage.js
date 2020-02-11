import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

export const LANGUAGE_EN = 'English';
export const LANGUAGE_VI = 'Tiếng Việt';

const languageName = {
  en: LANGUAGE_EN,
  vi: LANGUAGE_VI,
}

const ChangeLanguage = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button 
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 20,
                textDecoration: `underline`,
                cursor: `pointer`,
                background: `#222`,
                border: 0,
                fontFamily: 'sans-serif'
              }}
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default ChangeLanguage
