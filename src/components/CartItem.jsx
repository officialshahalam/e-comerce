import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';


function CartItem({post}) {

    const dispatch=useDispatch();

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("removed from cart");
    }

  return (
    <div className='flex w-[600px] border-b-2 border-gray-500 justify-between items-center gap-4 pb-4'>
        <div>
            <img src={post.image} className='h-[220px]'/>
        </div>
        <div className='w-[350px] space-y-5'>
            <h1 className='text-lg font-bold'>{post.title}</h1>
            <p className='text-sm'>{post.description}</p>
            <div className='flex w-full justify-between'>
                <span className='text-lg font-extrabold text-green-500'>${post.price}</span>
                <button 
                    onClick={()=>removeFromCart()}
                    className='bg-red-300 p-3 rounded-full text-xl text-red-800'>
                    <MdDelete/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem