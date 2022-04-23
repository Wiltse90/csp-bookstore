import {Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './components/Login'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from './components/About';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <HomeScreen /> } />
        <Route path="/product/:id" element={ <ProductScreen /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>

    </div>
  );
}

export default App;
