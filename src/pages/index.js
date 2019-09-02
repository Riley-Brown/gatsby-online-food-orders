import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MenuItems from "../components/MenuItems"
import OrderCart from "../components/OrderCart"

const IndexPage = () => {
  const [order, setOrder] = useState([])

  useEffect(() => {
    const localStorageOrder = localStorage.getItem("order")

    if (localStorageOrder) {
      setOrder(JSON.parse(localStorageOrder))
    }
  }, [])

  const addToOrder = item => {
    setOrder(order => [...order, item])
    localStorage.setItem("order", JSON.stringify(order))
  }

  const removeFromOrder = index => {
    setOrder(prevOrder => prevOrder.filter((_, i) => i !== index))
    localStorage.setItem("order", JSON.stringify(order))
  }
  return (
    <Layout>
      <MenuItems addToOrder={addToOrder} removeFromOrder={removeFromOrder} />
      <OrderCart order={order} removeFromOrder={removeFromOrder} />
    </Layout>
  )
}

export default IndexPage
