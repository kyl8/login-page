import './App.css';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './components/Login.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import Register from './components/Register.jsx';



function App( {Component}) {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>

    </NextUIProvider>   
  )
}

export default App;
