import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopArtists from "../components/topArtists"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopArtists />
  </Layout>
)

export default IndexPage
