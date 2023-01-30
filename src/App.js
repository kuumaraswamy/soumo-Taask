import React from "react"
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Data from "./components/Data";
// import Form from "./pages/Form";

function App() {
  return (
    <>
      <div >
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-user" element={<Data/>}/>
      </Routes>
      
      {/* <div>
        <Home/>
      </div> */}
  </>
  );
}

export default App;
