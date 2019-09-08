import React from "react"
import { graphql } from "gatsby"
import { StyledCategory } from "./StyledCategory"
import Img from "gatsby-image"

export default function Category({ data }) {
  console.log(data)
  return (
    <StyledCategory>
      <h1>{data.contentfulCategory.categoryName}</h1>
    </StyledCategory>
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
        inStock
        itemAddOns {
          addOnName
          addOnPrice
        }
        itemImage {
          fluid {
            src
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
