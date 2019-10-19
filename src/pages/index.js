import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import OrderCart from "components/OrderCart"
import Categories from "components/Categories"
import ConfirmOrder from "components/ConfirmOrder"

const IndexPage = () => {
  const showConfirmOrder = useSelector(state => state.global.showConfirmOrder)

  return (
    <Layout>
      <Categories />
      <OrderCart />
      <ConfirmOrder />
    </Layout>
  )
}

export default IndexPage
