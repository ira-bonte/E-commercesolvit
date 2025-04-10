import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Popular from './components/Popular'


function App(){
  return(
   <main>
    <Navbar />  
    <Intro />
    <Popular />
   </main>
  )
}

export default App;
