import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import Login from './Login'

export default function Router() {
  return (
    <div>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>


    </div>
  )
}
