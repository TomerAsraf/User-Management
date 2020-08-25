import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { StateContext } from '../context/StateContext';

const Home = () => {
    let history = useHistory()

    const { customers } = useContext(StateContext);
    const [admin, setAdmin] = useState({ user: 'admin', pass: 'admin' })
    const [user, setUser] = useState({ user: '', pass: '' })

    return (
        <div>
            <h1>Sv-Bank</h1>
            <form onSubmit={e => {
                e.preventDefault();
                if (user.user === admin.user && user.pass === admin.pass) {
                    history.push('/admin')
                }
                for (let i = 0; i < customers.length; i++) {
                    if (user.user === customers[i].name && user.pass === customers[i].pass) {
                        history.push('/user')
                    }
                    if (user.user.length === 0) {
                        alert('Username or password are worng')
                    }
                }
                if (user.user.length === 0 || user.pass.length === 0) {
                    alert('You didnt insert username or password!')
                }

            }}>
                <input type='text' name='username' value={user.user} placeholder='User Name' onChange={e => {
                    setUser({ ...user, user: e.target.value })
                }} /><br />
                <input type='password' name='password' value={user.pass} placeholder='Password' onChange={e => {
                    setUser({ ...user, pass: e.target.value })
                }} /><br />
                <button onClick={() => {
                    history.push('/register')
                }}>Create new user</button><br />
                <input type='submit' value='ENTER' />
            </form>
        </div>
    )
}

export default Home
