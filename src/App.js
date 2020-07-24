import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import formSchema from './validation/formSchema'
import * as yup from 'yup'

const orderData = [ {
  name: '',
  size: '',
  toppings: []
}]
const initialOrderValue = [{
  name: '',
  size: '',
  toppings: []
}]
const initialFormValues = {
  name: '',
  size: '',
  toppings: []
}
const initialFormErrors = {
  name: '',
  size: '',
  toppings: []
}



const App = () => {
  const [order, setOrder] = useState(initialOrderValue)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getOrder = () => {
    setOrder([order])
  }

  const postNewOrder = (newOrder) => {
    console.log(newOrder)

    setOrder([newOrder, ...order])
    setFormValues(initialFormValues)
    
  }
  console.log(order)
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.hobbies,
        [name]: isChecked
      }
    })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(top => formValues.toppings[top])
    }
    postNewOrder(newOrder)
  }
  useEffect(() => {
    getOrder()
  }, [])



  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order Pizza</Link>

      <Switch>
        <Route path='/pizza'>
          <OrderForm
            order={order}
            inputChange ={inputChange}
            submit ={submit}
            values ={formValues}
            errors = {formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </>
  );
};
export default App;
