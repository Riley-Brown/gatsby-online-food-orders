import React, { useState, useEffect } from "react"
import Img from "gatsby-image"

export default function Item({ item, addToOrder }) {
  const [price, setPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [itemSize, setItemSize] = useState(null)
  const [addOnsPrice, setAddOnsPrice] = useState(null)
  const [addOns, setAddOns] = useState([])
  const [quantity, setQuantity] = useState(1)

  // handle initial price
  useEffect(() => {
    if (item.itemOptions) {
      setPrice(item.itemOptions.itemPrices[0])
      setItemSize(item.itemOptions.itemSizes[0])
    }
  }, [])

  // handle total price
  useEffect(() => {
    const handleTotalPrice = () => {
      if (addOnsPrice && price) {
        setTotalPrice(
          ((Number(price) + Number(addOnsPrice)) * quantity).toFixed(2)
        )
      } else if (price) {
        setTotalPrice((price * quantity).toFixed(2))
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
    <div className="item">
      <h1>{item.itemName}</h1>
      <p>{item.itemDescription.itemDescription}</p>
      <Img fluid={item.itemImage.fluid} />
      <select name="select-size" id="" onChange={handleSizeChange}>
        {item.itemOptions.itemSizes.map((size, index) => (
          <option
            value={size}
            size={size}
            data-size={size}
            data-price={item.itemOptions.itemPrices[index]}
          >
            {size}
          </option>
        ))}
      </select>
      <h5>${totalPrice}</h5>
      <div className="quantity">
        <button
          onClick={() => quantity > 1 && setQuantity(quantity => quantity - 1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity => quantity + 1)}>+</button>
      </div>
      {item.itemOptions.itemAddOns.addOn.map((addOn, index) => (
        <div>
          <input
            type="checkbox"
            name={addOn}
            id={addOn}
            value={addOn}
            onChange={handleAddOns}
            data-price={item.itemOptions.itemAddOns.addOnPrice[index]}
          />
          <label htmlFor={addOn}>
            {addOn} - ${item.itemOptions.itemAddOns.addOnPrice[index]}
          </label>
        </div>
      ))}
      <button onClick={handleAddToOrder}>Add to Order</button>
    </div>
  )
}
