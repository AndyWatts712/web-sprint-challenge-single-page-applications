import React from 'react'

export default function OrderForm() {

    return(
        <div>
            <form>
                <label>Name: 
                    <input
                        type='text'
                        name='name'
                        value = ''
                    />
                </label>
            </form>
        </div>
    ) 
}