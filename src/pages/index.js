import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OrderCart from "../components/OrderCart"
import Categories from "../components/Categories"

const IndexPage = () => {
  return (
    <Layout>
      <Categories />
      <OrderCart />
    </Layout>
  )
}

export default IndexPage
