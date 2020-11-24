/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Elephant | inmobiliaria",
    author: "Clasihome",
    //imageUrl: "https://clasihome.com/properties/back.png",
    description:
      "Conectamos clientes con propiedades. Optimiza, gestiona y vende más. La nueva plataforma inmobiliaria que te ayuda a optimizar tu tiempo de trabajo y obtener mejores resultados. Pruébalo gratis por 15 días.",
    //keywords: `crm, inmobilario, chile, republica, propiedades, republicar, portales, portal, inmobiliaria, software, web, santiago, corredor, casas, departamentos, venta, arriendo, mejores, precios, app`,
    facebook: "https://www.facebook.com/Clasihome-109624727580277/",
    instagram: `https://www.instagram.com/_clasihome/?igshid=1u34cmwk5fudl`,
    siteUrl: `https://tender-wozniak-faad50.netlify.app/`,
  },  
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Elephant | inmobiliaria",
        short_name: "elephant",
        start_url: "/",
        icon: "static/logo.svg",
      },
    },    
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },     
    /*{
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: [`300`]
            //subsets: [`latin`]
          },
        ],
      },
    },*/    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /_icons/
        }
      }
    }    
  ],
}
