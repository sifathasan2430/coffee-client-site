import React from 'react';
import { useLoaderData } from 'react-router';

const Detailspage = () => {
    const data=useLoaderData()
    const {
name,
Chef
}=data
    console.log(data)
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={data.photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{Chef}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Detailspage;