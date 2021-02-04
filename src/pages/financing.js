import React from "react"
import Layout from '../_layout';
import { graphql } from 'gatsby';
import Hero from '../_sections/financing/hero';
import Calculator from '../_sections/financing/cal';

export default function Home({ data }) {

  return (
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <Calculator />
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