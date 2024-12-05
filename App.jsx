
import pic from"./images/Tk.jpg";
import pic2 from"./images/abes.jpeg";
import pic3 from"./images/homephoto.jpg";
import pic4 from "./images/ppt.jpg";
import './App.css'
import State3 from './component/State3'
import FavoriteColor from "./component/FavoriteColor";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainLayout from "./component/MainLayout";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Registration from "./component/Registration";
import { useState } from "react";



function App() {
  const [store,setStore]=useState("");
  // const user = {
  //   name: "TS",
  //   Id: 27,
  //   hobbies:["Reading","Travelling"], ismember: true,
  // };
  return (
    // <div class="Card" >
    //   { <Child2 user={user}/> }

    // {/* {<><Cards name="Tanishka Shishodia" pic={pic} roll="02422" />
    // <Cards name="ABES ENGINEERING COLLEGE" pic={pic2} roll="68459793470" />
    // <Cards name="MEETING" pic={pic3} roll="02422" />
    // <Cards name="WORKING" pic={pic4} roll="23648269" /></> } */}
    // </div>
    <div>
       {JSON.stringify(store)}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration regData={setStore} />}></Route>
        <Route path="/dash" element={<Dashboard/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
