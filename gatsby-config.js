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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`]
          },
          {
            family: `Droid Sans`,
            variants: [`400`]
          }
        ]
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
