import React from 'react';
import Layout from '../_layout/index';
import Hero from '../_sections/properties/hero';
import Properties from '../_sections/properties/properties';
import Reviews from '../_sections/properties/reviews';
import { graphql } from 'gatsby';

export default ({ data, location })=> (
  <Layout data={JSON.parse(data.initial.data)}>
    <Hero />
    {console.log("LOCATION LOCATION", location)}
    <Properties location={location} />
    <Reviews />
  </Layout>
)

export const query = graphql`
query{
  initial{
    data
  }
}
`