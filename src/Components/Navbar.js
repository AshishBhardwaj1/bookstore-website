import React from 'react'
import "./navbar.css"


export default function Navbar({size ,setShow}) {
  return (
    <div>
<nav>
    <div className="nav-box">
        <span className='my-shop'>Ash Shopping</span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span> </span>
        <span>{size}</span>
        </div>
    </div>
</nav>
  
    </div>
  )
}
