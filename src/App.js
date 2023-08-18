
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';

function App() {
  const [cart ,setCart] =useState([])
  const [show,setShow] =useState(true)

const  handleClick=(item)=>{
  let ispresent = false;
  cart.forEach((product)=>{
    if (item.id===product.id) 
    ispresent= true;

  })
  if (ispresent) {
    setWarning(true)
    setTimeout(() => {
      setWarning(false)
    }, 2000);
    return
   
  }
  setCart([...cart,item])

}
const handleChange =(item ,d)=>{
console.log(item,d)
let ind = -1;
cart.forEach((data ,index)=>{
  if (data.id===item.id)
  ind=index;
})
const tempArr = cart;
tempArr[ind].amount +=d;
if (tempArr[ind].amount===0){
  tempArr[ind].amount =1
  setCart([...tempArr])
}
}
const [warning,setWarning] =useState(false)
  return (
   <div>



    <Navbar size= {cart.length} setShow={setShow}  handleChange={handleChange}/>
    {
      show?
      <Shop handleClick ={handleClick}/>:    <Cart cart={cart} setCart={setCart}/>
    }
    {
      warning && <div className='warning' style={{height:"40px",backgroundColor:"red",position:"absolute" , width:"250px",left:"0",top:"10px",color:"white"}}>Item is already in your cart </div>
    }
   </div>
  );
}

export default App;
