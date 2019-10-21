import React from "react"
import { Email, Item as EmailItem, Span, A, Image, Box } from "react-html-email"

import { useSelector } from "react-redux"

export default function useEmailTemplate(order) {
  // const order = useSelector(state => state.global.order)

  const emailHTML = (
    <Email title="New Food Order">
      <Box
        width="100%"
        cellSpacing={20}
        style={{
          border: "1px solid #ccc",
          marginBottom: "20px",
          marginTop: "20px",
          backgroundColor: "#fff",
        }}
      >
        <EmailItem align="center">
          <Span color="#444" fontSize={23}>
            Customer Info
          </Span>
        </EmailItem>
        <EmailItem>
          <Span fontSize={16}>Name:</Span>
          <Span fontSize={16}> Riley</Span>
        </EmailItem>
        <EmailItem>
          <Span fontSize={16}>Email</Span>
          <Span fontSize={16}> riley@gmail.com</Span>
        </EmailItem>
      </Box>
      <Box
        width="100%"
        cellSpacing={20}
        style={{
          border: "1px solid #ccc",
          borderBottom: "none",
          marginTop: "20px",
          backgroundColor: "#fff",
        }}
      >
        <EmailItem align="center">
          <Span color="#444" align="center" fontSize={23}>
            Order
          </Span>
        </EmailItem>
      </Box>

      {order.map(item => (
        <Box
          marginBottom={20}
          cellSpacing={20}
          width="100%"
          style={{
            border: "1px solid #ccc",
            borderTop: "none",
            backgroundColor: "#fff",
          }}
        >
          <EmailItem width="50%">
            <Span fontSize={16}>{item.name}</Span>
          </EmailItem>
          <EmailItem width="50%">
            <Span fontSize={16}>Size: {item.size}</Span>
          </EmailItem>
          <EmailItem width="50%">
            <Span fontSize={16}>Quantity: {item.quantity}</Span>
          </EmailItem>
          <EmailItem width="50%">
            <Span fontSize={16}>Price: {item.price}</Span>
          </EmailItem>
          {item.addOns && item.addOns.length > 0 && (
            <EmailItem width="50%">
              <ul style={{ listStyleType: "none" }}>
                <Span>
                  <h4>Add Ons</h4>
                </Span>
                {item.addOns.map(addOn => (
                  <li>- {addOn}</li>
                ))}
              </ul>
            </EmailItem>
          )}
          {item.options && item.options.length > 0 && (
            <EmailItem width="50%">
              <ul style={{ listStylePosition: "inside" }}>
                {item.options.map(option => (
                  <>
                    <Span>
                      <h4>{option.optionName}</h4>
                    </Span>
                    <li>{option.choiceName}</li>
                  </>
                ))}
              </ul>
            </EmailItem>
          )}

          <EmailItem width="50%">
            <Image
              alt={item.name}
              align="center"
              src={`https:${item.itemImgFluid.src}`}
              width={200}
              height={200}
              style={{
                borderRadius: "8px",
                margin: "auto",
              }}
            />
          </EmailItem>
        </Box>
      ))}
      <Box
        marginBottom={20}
        cellSpacing={20}
        width="100%"
        style={{
          border: "1px solid #ccc",
          backgroundColor: "#fff",
          marginTop: "40px",
          padding: "20px",
        }}
      >
        <EmailItem align="center">
          <A
            href="https://google.com?confirm=true"
            style={{ textDecoration: "none" }}
          >
            <Span
              fontSize={25}
              style={{
                width: "45%",
                backgroundColor: "#4f6489",
                color: "#fff",
                borderRadius: "4px",
                padding: "10px",
                marginRight: "20px",
              }}
            >
              Confirm Order
            </Span>

            <Span
              fontSize={25}
              style={{
                width: "45%",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: "4px",
                padding: "10px",
              }}
            >
              Decline Order
            </Span>
          </A>
        </EmailItem>
      </Box>
    </Email>
  )

  return [emailHTML]
}
