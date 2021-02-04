import React from "react"
import Layout from '../_layout';
import { graphql } from 'gatsby';
import Hero from '../_sections/investments/hero';
import Contact from '../_sections/investments/contact';

export default function Home({ data }) {

  return (
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <Contact />
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