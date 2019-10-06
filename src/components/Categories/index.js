import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledCategories } from "./StyledCategories"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

export default function Categories() {
  const showCart = useSelector(state => state.global.show)
  const categories = useStaticQuery(graphql`
    query CategoriesQuery {
      allContentfulCategory {
        edges {
          node {
            id
            categoryName
            slug
            categoryImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = categories.allContentfulCategory
  return (
    <StyledCategories showCart={showCart}>
      {edges.map(edge => (
        <div className="category" key={edge.node.id}>
          <Link to={`/${edge.node.slug}`}>
            <Img fluid={edge.node.categoryImage.fluid} />
            <h1>{edge.node.categoryName}</h1>
          </Link>
        </div>
      ))}
    </StyledCategories>
  )
}
