import React from "React"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/search"


const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SearchPage