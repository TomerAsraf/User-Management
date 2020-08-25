import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StateContextProvider from './context/StateContext';
import Home from './componets/Home';
import Register from './componets/Register';
import User from './componets/User';
import Edit from './componets/Edit';
import Admin from './componets/Admin';


const App = () => {
  return (
    <StateContextProvider>
    <BrowserRouter>
    <main>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/user' exact>
          <User/>
        </Route>
        <Route path='/edit' exact>
          <Edit/>
        </Route>
        <Route path='/admin' exact>
          <Admin/>
        </Route>
      </Switch>
    </main>
    </BrowserRouter>
    </StateContextProvider>    
  )
}

export default App

