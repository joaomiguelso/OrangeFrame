import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/pages.css"

const IndexPage = () => (
  <Layout>
    <Link to="/founding"><div id="landing-background"></div></Link>
  </Layout>
)

export default IndexPage
