import React from "react"
import { graphql } from "gatsby"
import { StyledCategory } from "./StyledCategory"
import Item from "../Item"
import Layout from "../layout"
import OrderCart from "../OrderCart"

export default function Category({ data }) {
  return (
    <Layout>
      <StyledCategory>
        <h1>{data.contentfulCategory.categoryName}</h1>
        <div className="category-container">
          {data.contentfulCategory.item.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </StyledCategory>
      <OrderCart />
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
