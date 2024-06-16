import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import React from "react";

function App() {

  return (
   <div>
<Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
</Routes>
   </div>
  );
}

export default App;
