import React from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const Card = ({items,deletedata,dataofcoffee,setdataofcoffee}) => {
    const {_id,Chef}=items
    
    const deletehandler=(id)=>{
    
     Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    //  fetch( `/api/delete/${id}`,{
    //     method:"DELETE"
    //  }).then(res=>res.json()).then(data=>console.log(data))   
    fetch(`/api/delete/${id}`,{
        method:"DELETE"
    }).then(res=>res.json()).then(data=>{
        if (data.deletedCount){
            const filterdata=dataofcoffee.filter(items=>items !==Id)
                        setdataofcoffee(filterdata)
        }
    })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
    }
    return (
        <div class="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">

    <div class="h-60 bg-gray-100 flex items-center justify-center">
        <img src={items.
photoUrl
} alt="" srcset="" />
    </div>

    
    <div class="p-6 space-y-3">
        <div>
            <h3 class="text-2xl font-bold text-gray-800">{items.name}</h3>
            <p class="text-sm text-gray-500 mt-1">{items.Chef}</p>

        </div>

        <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-amber-600">
                890 Taka
            </span>
            <div className="join join-vertical space-y-4">
  <button  className="btn join-item"><NavLink to={`/coffeedetails/${_id}`} >view</NavLink></button>
  <NavLink to={`/updatecoffee/${_id}`}><button  className="btn join-item">Edit</button></NavLink>
  <button onClick={()=>deletehandler(_id)} className="btn join-item">Delete</button>
</div>
        </div>
    </div>
</div>
    );
};

export default Card;