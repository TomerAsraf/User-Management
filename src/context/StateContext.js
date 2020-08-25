import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';

export const StateContext = createContext();

const StateContextProvider = (props) => {

    let history = useHistory()

    const [customers, setCustomers] = useState([]);
    const [userIndex, setUserIndex] = useState(null);

    const upDateUserIndex = (i) => {
        setUserIndex(i)
    }

    const removeCustomer = (id) => {
        setCustomers(customers.filter(customer => customer.id !== id))
    }
    


    return (
        <StateContext.Provider value={{ customers, setCustomers, userIndex, setUserIndex, upDateUserIndex, }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContextProvider
