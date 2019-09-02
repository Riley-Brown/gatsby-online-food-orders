import React, { useState } from "react"
import { StyledMenuItems } from "./StyledMenuItems"
import { useStaticQuery, graphql } from "gatsby"

import Item from "../Item"

export default function MenuItems({ addToOrder }) {
  const products = useStaticQuery(graphql`
    query ProductsQuery {
      allContentfulMenuItems {
        edges {
          node {
            itemName
            itemImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            itemOptions {
              itemSizes
              itemPrices
              itemAddOns {
                addOn
                addOnPrice
              }
            }
            itemDescription {
              itemDescription
            }
            contentful_id
          }
        }
      }
    }
  `)

  const { edges } = products.allContentfulMenuItems
  return (
    <StyledMenuItems>
      {edges.map(edge => (
        <Item item={edge.node} addToOrder={addToOrder} />
      ))}
    </StyledMenuItems>
  )
}
