import Navbar from './components/Navbar';  
import './App.css';  
import Intro from './components/Intro';
import Popular from './components/Popular'
import Footer from './components/Footer'
import Latest from './components/Latest';
import { CartProvider } from './components/CartContext'; 
import Cart from './components/Cart'

function App(){
  return(
   <main>
    <CartProvider>
    <Navbar />  
    <Cart />  
    <Intro />
    <Popular />
      <div className="min-h-screen bg-gray-100">
      <Latest />
      </div>
      <Footer />
    </CartProvider>
    
   </main>
  )
}

export default App;