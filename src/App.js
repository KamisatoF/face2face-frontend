

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ServiceCRUD from './pages/ServiceCRUD';
import Cadastro from './pages/Cadastro'
import { AuthProvider } from './context/AuthContext';
import React, { useContext } from 'react';
import { Context } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, navigateTo }) => {
  const { authenticated } = useContext(Context);
  return authenticated ? children : <Navigate to={navigateTo} />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<PrivateRoute navigateTo="/login"><ServiceCRUD /></PrivateRoute>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
