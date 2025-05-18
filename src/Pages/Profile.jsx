import React, { useState } from 'react';
 import { useLoaderData } from 'react-router';
import auth from '../firebase/firebase.config';
const Profile = () => {
     const data=useLoaderData()
     const [users,setuser]=useState(data)
    console.log(data)


    const deletehandler=(Id)=>{
        console.log(Id)
       fetch(`/api/profiledelete/${Id}`,{
        method:"DELETE"
       }).then(res=>res.json()).then(data=>{
        if (data.deletedCount){
           
  

            const filterdata=users.filter(items=>items._id !==Id)

             setuser(filterdata)
        }
       })
    }
    return (
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     { users.map((items,index)=> <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>
            {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{items.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">{items.email}</span>
        </td>
        <td>Purple</td>
        <th>
          <button onClick={()=>deletehandler(items._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>)}
      </tbody>
      </table>
      </div>
    );
};

export default Profile;