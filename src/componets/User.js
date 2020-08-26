import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StateContext } from '../context/StateContext';

const User = () => {
    let history = useHistory();

    const { userIndex, customers } = useContext(StateContext);

    const [display, setDisplay] = useState(false)

    const [expenses, setExpenses] = useState({ company: '', amount: 0 })

    const handleChange = e => {
        const { name, value } = e.target
        setExpenses({ ...expenses, [name]: value })
    }

    return (
        <div>
            <h1>Welcome <span id='user-name'>{customers[userIndex].name}</span></h1>
            <button onClick={() => {
                alert(customers[userIndex].money)
            }}>BALANCE</button><br />
            <button onClick={() => {
                setDisplay(!display)
            }}>ACTION</button><br />
            <button onClick={() => {
                history.push('/edit')
            }}>EDIT</button><br />
            <button onClick={() => {
                history.push('/')
            }}>EXIT</button>

            {display &&
                <div>
                    <input type='number' name='amount' value={expenses.amount} onChange={handleChange} /> <br />

                    <input type='text' name='company' value={expenses.company} onChange={handleChange} /> <br />

                    <button onClick={() => {
                        setDisplay(!display)
                        let tempArr = [...customers[userIndex].expenses, expenses]
                        let tempObj = {
                            id: customers[userIndex].id,
                            name: customers[userIndex].name,
                            pass: customers[userIndex].pass,
                            passConfirm: customers[userIndex].passConfirm,
                            money: customers[userIndex].money,
                            expenses: tempArr
                        }

                        customers[userIndex] = tempObj


                    }}>Accept</button>
                </div>
            }
        </div>


    )
}

export default User

