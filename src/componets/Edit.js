import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

const Edit = () => {

    let history = useHistory()

    const { customers, setCoustomers, userIndex } = useContext(StateContext)

    const [editUser, setEditUser] = useState({
        id: uuid(),
        cutomerID: customers[userIndex].cutomerID,
        name: customers[userIndex].name,
        pass: customers[userIndex].pass,
        passConfirm: customers[userIndex].passConfirm,
        money: customers[userIndex].money,
        expenses: customers[userIndex].expenses
    })

    const handleChange = e => {
        const { name, value } = e.target
        setEditUser({ ...editUser, [name]: value })

    }


    return (
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={e => {
                e.preventDefault()
                let checker = false
                if (editUser.cutomerID.length !== 9) {
                    alert('The ID you insert is wrong try again...')
                    checker = true
                }
                if (editUser.name.length < 4) {
                    alert('Name must contain at least 4 characters')
                    checker = true
                }
                if (editUser.pass.length < 6) {
                    alert('password must contain at least 6 characters')
                    checker = true
                }
                if (editUser.money.value > 1000000) {
                    alert('You can have only 1M in our bank')
                    checker = true
                }
                if (editUser.pass !== editUser.passConfirm) {
                    alert('Password conformtion is not the same as password')
                    checker = true
                }
                if (!checker) {
                    let temp = editUser
                    customers[userIndex] = temp
                    history.push('/user')
                }
            }}>
                <input
                    type='text'
                    name='cutomerID'
                    value={editUser.cutomerID}
                    onChange={handleChange}
                    placeholder='ID'
                /><br />
                <input
                    type='text'
                    name='name'
                    value={editUser.name}
                    placeholder='FullName'
                    onChange={handleChange}
                /><br />
                <input
                    type='password'
                    name='pass'
                    value={editUser.pass}
                    placeholder='PASSWORD'
                    onChange={handleChange}
                /><br />
                <input
                    type='password'
                    name='passConfirm'
                    value={editUser.passConfirm}
                    placeholder='Confirm Pass'
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='money'
                    value={editUser.money}
                    placeholder='Money'
                    onChange={handleChange}
                /><br />
                <input
                    type='submit'
                    value='Create'
                />
            </form>
        </div>
    )
}

export default Edit
