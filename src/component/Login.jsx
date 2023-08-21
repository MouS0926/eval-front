import React, { useState } from 'react'

export default function Login() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")


    const handlelogin=(e)=>{
        e.preventDefault()
            const user={
               email,password
            }
        
            fetch("https://instamasai-mxz3.onrender.com/users/login",{
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
                localStorage.setItem("token",res.token)
                alert("login")
                console.log(res);
        
            })
            .catch((err)=>{
                console.log(err);
            })
        }

  return (
    <div>


<form action="">
<br /><br />
 
    <input type="email" name="email" id=""  value={email}
     onChange={(e)=>setemail(e.target.value)}
    /><br /><br />
    <input type="password" name="password" id="" value={password}
     onChange={(e)=>setpassword(e.target.value)}
    /><br /><br />
    
    <button onClick={handlelogin}>submit</button>
</form>




    </div>
  )
}
