module.exports = {
  siteMetadata: {
    title: 'Daniel Meilleur',
    description: 'Daniel Meilleur\'s Website',
    github: 'https://github/daniel-mlr/dmeilleur',
    blog:'https://dmeilleur.com/blog',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-tailwind-emotion-starter', // à changer ?
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
