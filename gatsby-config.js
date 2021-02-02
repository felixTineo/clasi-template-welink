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
    title: "Fluss Mosel - Propiedades",
    author: "Clasihome",
    //imageUrl: "https://clasihome.com/properties/back.png",
    description:
      "Tenemos excelentes propiedades pensadas para ti.",
    keywords: `inmobilario, chile, republica, propiedades, republicar, portales, portal, inmobiliaria, web, santiago, corredor, casas, departamentos, venta, arriendo, mejores, precios`,
    facebook: "https://www.facebook.com",
    instagram: `https://www.instagram.com`,
    siteUrl: `https://wizardly-villani-67a864.netlify.app/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: 'jpg', // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elephant - inmobiliaria`,
        short_name: "elephant",
        lang: `es`,
        start_url: "/",
        icon: `static/favicon.ico`,
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
