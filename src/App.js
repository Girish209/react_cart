
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Cartpage from './Cartpage';
import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
