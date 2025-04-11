import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Intro from './components/Intro';
import Popular from './components/Popular';
import Footer from './components/Footer';
import Latest from './components/Latest';
import { CartProvider } from './components/CartContext'; 
import Cart from './components/Cart';
import Store from "./components/Store";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />  
        <Cart />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Popular />
              <div className="min-h-screen bg-gray-100">
                <Latest />
              </div>
              <Footer />
            </>
          } />
          <Route path="/store" element={<Store />} />
        </Routes>
         
      </CartProvider>
    </Router>
  );
}

export default App;