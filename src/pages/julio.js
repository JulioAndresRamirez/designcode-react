import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function julio() {
  return (
    <Layout>
      <SEO title="Julio Page" />
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Hi my name is Julio. I'm frontend developer.</h1>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
    </Layout>
  )
}

export default julio
