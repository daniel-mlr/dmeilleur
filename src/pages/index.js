import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Data Analysis and Web Design</h1>
    <p>Ici sera le nouveau site dmeilleur.com</p>
    <p>Bâti à partir du starter Gatsby Tailwind Emotion</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
