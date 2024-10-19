import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from '../redux/Slices/CartSlice';


function ProductItem({post}) {

  const cart=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
 
  function addToCart(post){
    dispatch(add(post));
    toast.success("added to cart");
  }

  function removeFromCart(post){
    dispatch(remove(post.id));
    toast.error("remove from cart");
  }

  return (
    <div className='border-2 border-black rounded-xl flex flex-col gap-6 justify-center items-center w-full px-2 py-4 hover:scale-110 transition duration-300 ease-in'>
      <h1 className='font-bold w-40 truncate '>{post.title}</h1>
      <p className='text-xs w-40 text-gray-400'>{`${post.description.split(" ").slice(0,10).join(" ")}...`}</p>
      <div><img src={post.image} className='h-[180px]'/></div>
      <div className='w-11/12 flex justify-between items-center'>
        <span className='text-green-700 font-semibold text-lg'>{`$${post.price}`}</span>
        {
          cart.some((p)=>p.id===post.id)?
          (
            <button
              onClick={()=>removeFromCart(post)}
              className='border-2 border-black px-4 py-1 rounded-full bg-black text-white'>
              remove item
            </button>
          )
          :
          (
            <button
              onClick={()=>addToCart(post)}
              className='border-2 border-black px-4 py-1 rounded-full bg-green-400'>
              add to cart
            </button>
          )
        }
      </div>
    </div>
  )
}
export default ProductItem;