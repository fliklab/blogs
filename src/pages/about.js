import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

//this is a page query
export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)


//page query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`