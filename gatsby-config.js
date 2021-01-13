/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Focusleaf',
    description: 'Build fast and pretty portfolio using Focusleaf Portfolio generator.',
    author: 'Roger Floriano',
    image: 'https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/roger.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-use-query-params',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Focusleaf',
        short_name: 'My Portfolio',
        start_url: '/?view=card',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll'
  ]
};
