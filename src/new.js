import React from 'react';
import Layout from '../_layout';
import New from '../_sections/new';
import { graphql } from 'gatsby';

export default ({ data })=> (
  <Layout data={JSON.parse(data.initial.data)}>
    <New />
  </Layout>
)

export const query = graphql`
query{
  initial{
    data
  }
}
`