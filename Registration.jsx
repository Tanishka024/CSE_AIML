import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regData}) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pwd,setpwd] = useState("");

    function getData(e){
        e.preventDefault();
        const data ={
            name, email,pwd
        };
        regData(data);
    }
  return (
    <div><h2>Welcome to Registration</h2>
    <form>
    <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e) =>{setName(e.target.value)}} type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter Name"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e) =>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e) =>{setpwd(e.target.value)}}type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button onClick= {getData} type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Registration