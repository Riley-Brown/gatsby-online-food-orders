import React, { useState, useEffect, useRef } from "react"
import Img from "gatsby-image"
import { StyledItem } from "./StyledItem"
import { useSelector, useDispatch } from "react-redux"

import AddOns from "./AddOns"
import Option from "./Option"

import plusSvg from "assets/svg/plus.svg"
import minusSvg from "assets/svg/minus.svg"
import checkMarkSvg from "assets/svg/checkmark.svg"

import { addToOrder } from "state/actions"

// import { toggleShow } from "../../state/global"

export default function Item({ item }) {
  const [price, setPrice] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [itemSize, setItemSize] = useState(null)
  const [addOnsPrice, setAddOnsPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showOptions, setShowOptions] = useState(false)
  const [optionsPrice, setOptionsPrice] = useState(0)
  const [addOns, setAddOns] = useState(null)
  const [options, setOptions] = useState([])
  const [addSuccess, setAddSuccess] = useState(false)

  const dispatch = useDispatch()

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
      if (price) {
        setTotalPrice(
          ((price + addOnsPrice + optionsPrice) * quantity).toFixed(2)
        )
      } else {
        setTotalPrice(item.itemPrice)
      }
    }
    handleTotalPrice()
  }, [quantity, itemSize, addOnsPrice, optionsPrice])

  useEffect(() => {
    if (options.length > 0) {
      const optionsTotal = options.reduce((a, b) => ({
        price: Number(a.price) + Number(b.price),
      }))
      setOptionsPrice(Number(optionsTotal.price))
    } else {
      setOptionsPrice(0)
    }
  }, [options])

  const handleSizeChange = e => {
    const dataset = e.target.options[e.target.selectedIndex].dataset
    setPrice(Number(dataset.price))
    setItemSize(dataset.size)
  }

  const handleAddToOrder = () => {
    dispatch(
      addToOrder({
        name: item.itemName,
        price: totalPrice,
        size: itemSize,
        addOns,
        quantity,
        options,
        itemImgFluid: item.itemImage.fluid,
      })
    )
    setAddSuccess(true)
    setTimeout(() => setAddSuccess(false), 3000)
  }

  const handleUpdateAddOns = addOns => {
    setAddOns(addOns)
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
                  key={size.size}
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
          handleUpdateAddOns={handleUpdateAddOns}
        />
      )}
      {item.itemOptions && (
        <>
          <button
            onClick={() => setShowOptions(show => !show)}
            style={{ cursor: "pointer", padding: "10px 0" }}
          >
            <span
              style={{
                minWidth: "73px",
                display: "inline-block",
                fontSize: "1.8rem",
              }}
            >
              Options
            </span>
            <img
              style={{
                width: "23px",
                verticalAlign: "bottom",
                marginLeft: "0.5rem",
              }}
              src={showOptions ? minusSvg : plusSvg}
              alt=""
            />
          </button>
          {item.itemOptions.map((option, index) => (
            <Option
              key={index}
              option={option}
              showOptions={showOptions}
              setOptionsPrice={setAddOnsPrice}
              itemId={item.id}
              setOptionsPrice={setOptionsPrice}
              setOptions={setOptions}
              options={options}
              index={index}
            />
          ))}
        </>
      )}

      <button
        className="add-to-order"
        data-bounce={addSuccess}
        onClick={handleAddToOrder}
      >
        Add to Order
        {addSuccess && (
          <img
            style={{ height: "15px", marginLeft: "10px" }}
            src={checkMarkSvg}
          />
        )}
      </button>
    </StyledItem>
  )
}
