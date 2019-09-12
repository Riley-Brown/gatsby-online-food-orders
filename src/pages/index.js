import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MenuItems from "../components/MenuItems"
import OrderCart from "../components/OrderCart"
import Categories from "../components/Categories"

const IndexPage = () => {
  const [order, setOrder] = useState([])

  // set initial order from local storage
  useEffect(() => {
    const localStorageOrder = localStorage.getItem("order")
    if (localStorageOrder) {
      setOrder(JSON.parse(localStorageOrder))
    }
  }, [])

  // set order in local storage every time order updates
  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order))
  }, [order])

  const addToOrder = item => {
    setOrder(order => [...order, item])
  }

  const removeFromOrder = index => {
    setOrder(prevOrder => prevOrder.filter((_, i) => i !== index))
  }

  return (
    <Layout>
      <Categories />
      <OrderCart order={order} removeFromOrder={removeFromOrder} />
    </Layout>
  )
}

export default IndexPage
