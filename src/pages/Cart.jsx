import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart() {

  const cart=useSelector((state)=>state.cart);
  console.log(cart);

  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='w-10/12 mt-[5rem] max-w-[1080px] mx-auto py-[100px]'>
      {
        cart.length>0?
        (
          <div className='flex w-full flex-col gap-[80px] lg:gap-0 lg:flex-row justify-between'>
            <div className='flex flex-col w-full gap-4'>
              {
                cart.map((post)=>{
                  return <CartItem key={post.id} post={post}/>
                })  
              }
            </div>
            <div className='flex flex-col justify-between w-full lg:w-[400px]'>
              <div>
                <h1 className='text-xl font-bold text-green-700'>Your Cart</h1>
                <p className='text-[3rem] font-semibold text-green-600'>Summary</p>
                <p className='text-xl font-semibold'>total items: {cart.length}</p>
              </div>
              <div className='w-full space-y-4'>
                <h1 className='text-2xl capitalize '>total amount:<span className='font-extrabold'>${totalAmount}</span></h1>
                <button className='bg-green-500 w-full text-center py-3 rounded-xl text-white text-xl font-bold '>Checkout Now</button>
              </div>
            </div>

          </div>
        )
        :
        (
          <div className='w-10/12 max-[1080px] h-[600px] mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold'>Your Cart is Empty!</h1>
            <NavLink to="/">
              <button className='bg-green-600 px-8 py-3 w-64 mt-4 text-white text-xl font-semibold rounded-xl'>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart