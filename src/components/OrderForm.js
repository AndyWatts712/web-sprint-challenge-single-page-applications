import React from 'react'
import OrderDetails from './OrderDetails'

export default function OrderForm(props) {
    const {
        inputChange,
        submit,
        values,
        errors,
        order,
        checkboxChange
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const {name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <button>Submit</button>
                <label>Size
          <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select a Size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <label>Peperonni
          <input
            type="checkbox"
            name='pepper'
            checked={values.toppings.pepper === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name='sausage'
            checked={values.toppings.sausage === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Mushroom
          <input
            type="checkbox"
            name='mushroom'
            checked={values.toppings.mushroom === true}
            onChange={onCheckboxChange}
          />
        </label>
        <label>Olives
          <input
            type="checkbox"
            name='olives'
            checked={values.toppings.olives === true}
            onChange={onCheckboxChange}
          />
        </label>
            </form>
            <OrderDetails order={order} />
        </div>
    )
}