import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//Helpers
import PrivateRoute from './Helpers/PrivateRoute';

//Pages
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="*" element={<Navigate to="/dashboard"/>}/>
        </Routes>
      </Router>
  );
}
