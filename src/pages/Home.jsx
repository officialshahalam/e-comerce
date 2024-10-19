import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

function Home() {

    const [isLoading,setIsLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const url = "https://fakestoreapi.com/products";

    async function fetchData(){
        setIsLoading(true);
        try{
            const res=await fetch(url);
            const data=await res.json();
            setPosts(data);
        }
        catch(e){
            toast.error("internet issue");
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div className='py-[100px]'>
        {
            isLoading?
            (
                <Spinner/>
            )
            :
            (
                <div className='w-10/12 max-w-[1080px] mx-auto grid grid-cols-4 gap-x-4 gap-y-10 mt-[5rem]'>
                    {
                        posts.map((post)=>(
                            <ProductItem key={post.id} post={post}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Home;