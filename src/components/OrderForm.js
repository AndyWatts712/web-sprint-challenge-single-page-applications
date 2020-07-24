import React from 'react'
import OrderDetails from './OrderDetails'

export default function OrderForm(props) {
const {
    inputChange,
    submit,
    values,
    errors,
    order
} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onInputChange = evt => {
    const {name, value} = evt.target
    inputChange(name, value)
}
    return(
        <div>
            <form onSubmit = {onSubmit}>
                <label>Name: 
                    <input
                        type='text'
                        name='name'
                        value = {values.name}
                        onChange = {onInputChange}
                    />
                </label>
                <button>Submit</button>
            </form>
            <OrderDetails order = {order}/>
        </div>
    ) 
}