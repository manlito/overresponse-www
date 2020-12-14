const languages = require('./src/locales/languages')

module.exports = {
  siteMetadata: {
    title: 'Overresponse',
    languages: languages
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/styles']
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Oxygen`,
              variants: [`400`]
            },
            {
              family: `Source Sans Pro`,
              variants: [`400`]
            }
          ]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'en',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false
      }
    }
  ]
}
