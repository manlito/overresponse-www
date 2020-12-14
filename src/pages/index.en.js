import React from 'react'
import Layout from '../layouts/en'
import Jumbotron from '../components/home/jumbotron/jumbotron.en'
import CenteredContent from '../components/layout/centered-content'
import HowToUse from '../components/home/how-to-use/how-to-use.en'
import GetStarted from '../components/home/get-started/get-started.en'

const IndexPage = props => (
  <Layout location={props.location}>
    <Jumbotron />
    <CenteredContent>
      <HowToUse />
      <GetStarted />
    </CenteredContent>
  </Layout>
)

export default IndexPage
