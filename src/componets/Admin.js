import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { useHistory } from 'react-router-dom'

const Admin = () => {

    let history = useHistory()

    const { customers, userIndex, upDateUserIndex, removeCustomer } = useContext(StateContext)

    const [display, setDisplay] = useState(false)

    return (
        <div>
            <h3 onClick={() => {
                history.push('/')
            }}>Exit</h3>
            <h1>Manager</h1>
            <div>
                {
                    customers.map((preson, i) => {
                        return (
                            <div>
                                <button onClick={() => {
                                    let tmp = i
                                    upDateUserIndex(tmp)
                                    setDisplay(!display)
                                }}>Fullname: {preson.name} ID: {preson.cutomerID}</button>

                                <button onClick={() => {
                                    removeCustomer(preson.id)
                                }}>Remove</button>

                                {display &&
                                    <div>
                                        {customers[i].expenses.map((exp, i) => {
                                            return <ul key={i}>
                                                <li>invested in: {exp.company}</li>
                                                <li>Price: {exp.amount}</li>
                                            </ul>
                                        })}
                                    </div>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Admin
