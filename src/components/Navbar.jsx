import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Navbar() {

    const cart=useSelector((state)=>state.cart);

  return (
    <div className='w-screen bg-slate-900'>
        <nav className='w-10/12 max-w-[1080px] mx-auto flex text-white justify-between items-center py-3'>
            <NavLink to="/">
                <img src="../src/assets/logo.png" className='h-14'/>
            </NavLink>
            <div className='flex items-center gap-4 justify-end'>
                <NavLink to="/cart">
                    <div className='text-3xl relative'>
                        <FaShoppingCart/>
                        {
                            cart.length >0 &&
                            <div className='absolute -top-1 left-1/2 text-xs text-white bg-green-600 h-5 w-5 flex items-center justify-center rounded-full font-bold animate-bounce'>
                                {cart.length}
                            </div>
                        }
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar