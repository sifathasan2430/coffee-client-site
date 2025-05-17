import React from 'react';
import { jsxs } from 'react/jsx-runtime';

const Addnewcoffe = () => {

    const handler=(e)=>{
        e.preventDefault()
        const form=e.target;
        const formcollection=new FormData(form)
        const data=Object.fromEntries(formcollection)
        

        fetch('/api/coffees',{
            method:"POST",
            headers:{
                   "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
            if (data.insertedId){
                alert('Data added successfully')
            
            }
        })
    }
    return (
        <div class="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-sm">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Update Existing Coffee Details</h1>
    <p class="text-gray-600 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

    <form onSubmit={handler} class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" name='name' defaultValue="Americano Coffee" 
                           class="w-full text-2xl text-black  px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
                    <input type="text" name='supplier' defaultValue="Cappu Authorizer" 
                           class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <input type="text" name='category' defaultValue="Americano" 
                           class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
            </div>

           
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Chef</label>
                    <input type="text"  name='Chef' defaultValue="Mr. Matin Paul" 
                           class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Taste</label>
                    <input type="text"  name="taste" defaultValue="Sweet and hot" 
                           class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                </div>
            </div>
        </div>

    
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input name='photoUrl' type="url" defaultValue="https://libb.co/PGqMPrg/11.png" 
                   class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Details</label>
            <textarea name='details' rows="3" 
                      class="w-full text-2xl text-black px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">Espresso with hot water</textarea>
        </div>

       
        <div class="pt-6">
            <button type="submit" 
                    class="w-full text-2xl text-black md:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                Update Coffee Details
            </button>
        </div>
    </form>
</div>
    );
};

export default Addnewcoffe;