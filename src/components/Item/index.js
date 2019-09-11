import React, { useState, useEffect, useRef } from "react"
import Img from "gatsby-image"
import { StyledItem } from "./StyledItem"

import AddOns from "./AddOns"

export default function Item({ item, addToOrder }) {
  const [price, setPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [itemSize, setItemSize] = useState(null)
  const [addOnsPrice, setAddOnsPrice] = useState(null)
  const [quantity, setQuantity] = useState(1)

  // handle initial price
  useEffect(() => {
    if (item.itemSizes) {
      setPrice(item.itemSizes[0].sizePrice)
      setItemSize(item.itemSizes[0].size)
    } else {
      setPrice(item.itemPrice)
    }
  }, [])

  // handle total price
  useEffect(() => {
    const handleTotalPrice = () => {
      if (addOnsPrice && price) {
        setTotalPrice(((price + addOnsPrice) * quantity).toFixed(2))
      } else if (price) {
        setTotalPrice((price * quantity).toFixed(2))
      } else {
        setTotalPrice(item.itemPrice)
      }
    }
    handleTotalPrice()
  }, [quantity, itemSize, addOnsPrice])

  const handleSizeChange = e => {
    const dataset = e.target.options[e.target.selectedIndex].dataset
    setPrice(Number(dataset.price))
    setItemSize(dataset.size)
  }

  const handleAddToOrder = addOns => {
    addToOrder({
      name: item.itemName,
      price: totalPrice,
      size: itemSize,
      addOns,
      quantity,
    })
  }

  return (
    <StyledItem className="item">
      <Img fluid={item.itemImage.fluid} />
      <div className="item-title">
        <h1>{item.itemName}</h1>
        <div>
          {/* Sizes */}
          {item.itemSizes && (
            <select name="" id="select-size" onChange={handleSizeChange}>
              {item.itemSizes.map(size => (
                <option
                  value={size.size}
                  data-size={size.size}
                  data-price={size.sizePrice}
                >
                  {size.size}
                </option>
              ))}
            </select>
          )}
          <h5>${totalPrice}</h5>
        </div>
      </div>
      <div className="quantity">
        <button
          onClick={() => quantity > 1 && setQuantity(quantity => quantity - 1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
      </div>
      <p className="item-description">{item.itemDescription.itemDescription}</p>

      {/* Add ons */}
      {item.itemAddOns && (
        <AddOns
          addOns={item.itemAddOns}
          item={item}
          quantity={quantity}
          setTotalPrice={setTotalPrice}
          itemPrice={price}
          setAddOnsPrice={setAddOnsPrice}
        />
      )}
      <button className="add-to-order">Add to Order</button>
    </StyledItem>
  )
}
