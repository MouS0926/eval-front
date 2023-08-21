import React, { useState } from 'react'

export default function Registration() {
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")

const [age,setage]=useState("")
const [gender,setgender]=useState("")
const [city,setcity]=useState("")
const [married,setMarried]=useState("")


const handlesubmit=(e)=>{
e.preventDefault()
    const user={
        name,email,password,age,gender,city,married
    }

    fetch("https://instamasai-mxz3.onrender.com/users/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        alert("registered")

    })
    .catch((err)=>{
        console.log(err);
    })
}
  return (
    <div>
<form action="">
<br /><br />
    <input type="text" name="name" id="" value={name} 
     onChange={(e)=>setname(e.target.value)} placeholder='name'/> <br /><br />
    <input type="email" name="email" id=""  value={email}
     onChange={(e)=>setemail(e.target.value)} placeholder='email'
    /><br /><br />
    <input type="password" name="password" id="" value={password}
     onChange={(e)=>setpassword(e.target.value)} placeholder='pass'
    /><br /><br />
    <input type="text" name="age" id=""  value={age}
     onChange={(e)=>setage(e.target.value)} placeholder='age'
    /><br /><br />
    <input type="text" name="gender" id=""  value={gender}
     onChange={(e)=>setgender(e.target.value)} placeholder='gender'
    /><br /><br />
    <input type="text" name="city" id="" value={city}
     onChange={(e)=>setcity(e.target.value)} placeholder='city'
    /><br /><br />
    <input type="text" name="is_married" id="" value={married}
     onChange={(e)=>setMarried(e.target.value)} placeholder='married'
    /><br /><br />
    <button onClick={handlesubmit}>submit</button>
</form>

    </div>
  )
}
