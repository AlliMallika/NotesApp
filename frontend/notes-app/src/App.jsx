import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const routes = (
  <Router>
    <Routes>
        <Route path="/" exact element= { <Home/>}/>
        <Route path='/login' exact element= { <Login/>}/>
        <Route path='/signup' exact element= { <SignUp/>}/>
    </Routes>
  </Router>
);


const App = () => {
  return (
    <div>
       {routes}
    </div>
  )
}

export default App