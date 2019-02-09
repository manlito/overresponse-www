import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/en'
import Jumbotron from '../components/jumbotron.en'

const IndexPage = props => (
  <Layout location={props.location}>
    <div>
      <Jumbotron />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to='/page-2/'>Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
