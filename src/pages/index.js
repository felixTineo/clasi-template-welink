import React, { useEffect } from "react"
import Layout from '../_layout';
import Hero from '../_sections/home/hero';
import Properties from '../_sections/home/properties';
import Services from '../_sections/home/services';
import Construction from '../_sections/home/construction';
import About from '../_sections/home/about';
import Contact from '../_sections/home/contact';
import Legal from '../_sections/home/legal';
import { graphql } from 'gatsby';

export default function Home({ data }) {

  return (
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <Properties />
      <Services />
      <Construction />
      <Legal />
      <Contact noMargin />      
      <About />
    </Layout>
  )
}

export const query = graphql`
query{
  initial{
    data
  }
}
`