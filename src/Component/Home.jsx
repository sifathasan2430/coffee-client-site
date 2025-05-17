import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router';

const Home = () => {
    
    const navigate=useNavigate()
    const [dataofcoffee,setdataofcoffee]=useState([])
     

    
    useEffect(()=>{
        fetch('/api/coffees').then(res=>res.json()).then(data=>setdataofcoffee(data))
       
    },[dataofcoffee])
    return (
        <div >
            <div className='text-center  my-[250px]'>
                  <h2 className='text-2xl font-bold my-1.5'>--- Sip & Savor ---</h2> 
              <h1 className='text-3xl font-bold my-6'>Our Popular Products</h1>
              <button onClick={()=>navigate('/addcoffee')} className='btn btn-primary'>Add Coffee</button>
              <div className='my-[150px] px-[350px] grid grid-cols-3 gap-7'>
  {
   dataofcoffee.map(items=><Card items={items} dataofcoffee={dataofcoffee} setdataofcoffee={setdataofcoffee} key={items._id}></Card>)
  }
              </div>
            </div>
        </div>
    );
};

export default Home;