import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import User from './User';

const Register = () => {

    let history = useHistory();

    const { customers, setCustomers, setUserIndex, register } = useContext(StateContext)

    const [customer, setCustomer] = useState({
        id: uuid(),
        cutomerID: '',
        name: '',
        pass: '',
        passConfirm: '',
        money: '',
        expenses: [{ company: '', amount: 0 }]
    })

    const handleChange = e => {
        const { name, value } = e.target
        setCustomer({ ...customer, [name]: value })
    }

    return (
        <div>
            <div className='title'>
                <h1>REGISTER</h1>
            </div>

            <form className='register-form' onSubmit={e => {
                e.preventDefault()
                let checker = false
                if (customer.cutomerID.length !== 9) {
                    alert('The ID you insert is wrong try again...')
                    checker = true
                }
                if (customer.name.length < 4) {
                    alert('Name must contain at least 4 characters')
                    checker = true
                }
                if (customer.pass.length < 6) {
                    alert('password must contain at least 6 characters')
                    checker = true
                }
                if (customer.money.value > 1000000) {
                    alert('You can have only 1M in our bank')
                    checker = true
                }
                if (customer.pass !== customer.passConfirm) {
                    alert('Password conformtion is not the same as password')
                    checker = true
                }
                setUserIndex(customers.length)
                if (!checker) {
                    setCustomers([...customers, customer])
                    history.push('/user')
                }
            }}>
                <input type="text" name='cutomerID' placeholder='ID' value={customer.cutomerID} onChange={handleChange} /><br />

                <input type="text" name='name' placeholder='FullName' value={customer.name} onChange={handleChange} /><br />

                <input type="password" name='pass' type='password' placeholder='PASSWORD' value={customer.pass} onChange={handleChange} /><br />

                <input type="password" name='passConfirm' type='password' placeholder='Confirm Pass' value={customer.passConfirm} onChange={handleChange} /><br />

                <input type="text" name='money' placeholder='Money' value={customer.money} onChange={handleChange} /><br />

                <input type='submit' value='Create' />
            </form>
        </div>
    )
}

export default Register
