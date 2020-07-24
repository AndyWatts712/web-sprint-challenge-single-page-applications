import React from 'react'

export default function OrderDetails(props) {
    console.log(props)
    const {order} = props
    return(
        <div>
            <h2>Your Order</h2>
            <p>Name: {order[0].name}</p>
            <p>Size: {order[0].size}</p>
            {
        !!order[0].toppings && !!order[0].toppings.length &&
        <div>
          Toppings:
          <ul>
            {order[0].toppings.map((top, idx) => <li key={idx}>{top}</li>)}
          </ul>
        </div>
      }
        </div>
    )
}