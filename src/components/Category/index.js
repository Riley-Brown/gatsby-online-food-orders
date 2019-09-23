import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { StyledCategory } from "./StyledCategory"
import Item from "../Item"
import Layout from "../layout"
import OrderCart from "../OrderCart"

export default function Category({ data }) {
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
  console.log(data)
  return (
    <Layout>
      <StyledCategory>
        <h1>{data.contentfulCategory.categoryName}</h1>
        <div className="category-container">
          {data.contentfulCategory.item.map(item => (
            <Item key={item.id} item={item} addToOrder={addToOrder} />
          ))}
        </div>
      </StyledCategory>
      <OrderCart order={order} removeFromOrder={removeFromOrder} />
    </Layout>
  )
}

export const category = graphql`
  query CategoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      slug
      categoryName
      categoryImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      item {
        id
        slug
        itemPrice
        itemName
        inStock
        itemSizes {
          size
          sizePrice
        }
        itemAddOns {
          id
          addOnName
          addOnPrice
        }
        itemImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        itemDescription {
          id
          itemDescription
        }
        itemOptions {
          id
          optionName
          optionChoice {
            choiceName
            choicePrice
          }
        }
      }
    }
  }
`
