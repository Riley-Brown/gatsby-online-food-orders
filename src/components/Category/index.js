import React from "react"
import { graphql } from "gatsby"
import { StyledCategory } from "./StyledCategory"
import Img from "gatsby-image"
import Item from "../Item"
import Layout from "../layout"

export default function Category({ data }) {
  console.log(data)
  return (
    <Layout>
      <StyledCategory>
        <h1>{data.contentfulCategory.categoryName}</h1>
        <div className="category-container">
          {data.contentfulCategory.item.map(item => (
            <Item item={item} />
          ))}
        </div>
      </StyledCategory>
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
