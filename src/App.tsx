import About from './components/About';
import Home from './components/Home';
import Page2 from './components/page2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
function App() {

  return ( 
  <BrowserRouter>
     <Routes>
        <Route path="" element={<Home />}>
        <Route path="/home" element={<Home />}></Route>  </Route>
        <Route path="/page2" element={<Page2/>}></Route>
        <Route path="/home#about" element={<About/>}></Route>    
      </Routes>
       </BrowserRouter>
        
      );
}

export default App
