import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//Helpers
import PrivateRoute from './Helpers/PrivateRoute';

//Pages
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Accounts from './Pages/Accounts';
import Settings from './Pages/Settings';
import SignUp from './Pages/Signup';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/dashboard/:id" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/accounts" element={<PrivateRoute><Accounts/></PrivateRoute>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<PrivateRoute><Settings/></PrivateRoute>}/>
          <Route path="*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
      </Router>
  );
}
