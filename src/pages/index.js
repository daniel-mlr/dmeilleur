import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import Layout from '../components/layout'

const IndexPage = () => (
  // hero
  <Layout>
    <Hero />
    <p>Show the facts! Let the <span>data</span> do the talking.</p>
    <p>Bâti à partir du starter Gatsby Tailwind Emotion</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
