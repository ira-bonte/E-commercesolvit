import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Popular from './components/Popular'

import Latest from './components/Latest';
import { CartProvider } from './components/CartContext'; 

function App(){
  return(
   <main>
    <Navbar />  
    <Intro />
    <Popular />
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
      <Latest />
      </div>
    </CartProvider>
   </main>
  )
}

export default App;
