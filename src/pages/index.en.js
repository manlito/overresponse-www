import React from 'react'
import Layout from '../layouts/en'
import Jumbotron from '../components/home/jumbotron/jumbotron.en'
import CenteredContent from '../components/layout/centered-content'
import Features from '../components/home/features/features.en'

const IndexPage = props => (
  <Layout location={props.location}>
    <Jumbotron />
    <CenteredContent>
      <Features />
    </CenteredContent>
  </Layout>
)

export default IndexPage
