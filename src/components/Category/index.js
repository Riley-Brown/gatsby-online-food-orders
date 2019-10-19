import React from "react"
import { graphql, Link } from "gatsby"
import { StyledCategory } from "./StyledCategory"
import Item from "../Item"
import Layout from "../layout"
import OrderCart from "../OrderCart"
import ConfirmOrder from "components/ConfirmOrder"
import { useSelector } from "react-redux"

export default function Category({ data, navigate }) {
  const showCart = useSelector(state => state.global.show)
  const showConfirmOrder = useSelector(state => state.global.showConfirmOrder)

  return (
    <Layout>
      <StyledCategory showCart={showCart}>
        <div className="bread-crumb">
          <Link to="/">All Categories</Link>
          <h1>{data.contentfulCategory.categoryName}</h1>
        </div>
        <div className="category-container">
          {data.contentfulCategory.item.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </StyledCategory>
      <OrderCart />
      {showConfirmOrder && <ConfirmOrder />}
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
