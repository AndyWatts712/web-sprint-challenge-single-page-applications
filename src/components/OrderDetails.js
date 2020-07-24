import React from 'react'

export default function OrderDetails(props) {
    console.log(props)
    const {order} = props
    return(
        <div>
            <h2>Your Order</h2>
            <p>Name: {order[0].name}</p>
        </div>
    )
}