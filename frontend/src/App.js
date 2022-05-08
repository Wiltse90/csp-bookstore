import React from 'react'
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from './components/About';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {

  return (
    <div  className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomeScreen /> } />
        <Route path="/product/:id" element={ <ProductScreen /> } />
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path={"/cart"} element={ <CartScreen /> } />
        <Route path={"/cart/:id"} element={<CartScreen /> } />
        <Route path="/login" element={ <LoginScreen /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
