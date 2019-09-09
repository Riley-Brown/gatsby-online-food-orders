import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { StyledItem } from "./StyledItem"

export default function Item({ item, addToOrder }) {
  const [price, setPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [itemSize, setItemSize] = useState(null)
  const [addOnsPrice, setAddOnsPrice] = useState(null)
  const [addOns, setAddOns] = useState([])
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
  }, [quantity, itemSize, addOns])

  const handleSizeChange = e => {
    const dataset = e.target.options[e.target.selectedIndex].dataset
    setPrice(dataset.price)
    setItemSize(dataset.size)
  }

  const handleAddOns = e => {
    const { price } = e.target.dataset
    const addOn = e.target.value
    if (e.target.checked) {
      setAddOnsPrice(prevPrice =>
        prevPrice !== null ? prevPrice + Number(price) : Number(price)
      )
      setAddOns(addOns => [...addOns, addOn])
    } else if (!e.target.checked) {
      setAddOnsPrice(prevPrice =>
        prevPrice !== null ? Number(prevPrice) - Number(price) : Number(price)
      )
      const filteredAddOns = addOns.filter(addOn => addOn !== e.target.value)
      setAddOns(filteredAddOns)
    }
  }

  const handleAddToOrder = () => {
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
      <h5>Add Ons</h5>
      <div className="add-ons">
        {item.itemAddOns &&
          item.itemAddOns.map(addOn => (
            <label htmlFor={`${item.itemName}-${addOn.addOnName}`}>
              <input
                type="checkbox"
                name={addOn.addOnName}
                data-price={addOn.addOnPrice}
                id={`${item.itemName}-${addOn.addOnName}`}
                value={addOn.addOnName}
                onChange={handleAddOns}
              />
              <span className="check-mark" />
              <span>{addOn.addOnName}</span>
              <span>+${addOn.addOnPrice}</span>
            </label>
          ))}
      </div>
      <button className="add-to-order">Add to Order</button>
    </StyledItem>
  )
}
