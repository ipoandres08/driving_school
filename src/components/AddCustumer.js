import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import custumerService from '../services/custumerService';

export const AddCustumer = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const[isUpdate, setIsUpdate] = useState(false);
    const [custumer, setCustumer] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setCustumer(
            {...custumer,[e.target.name]: value}
        );
    };
  
    const saveCustumer = (e) => {
        e.preventDefault();
        if(params.id){
            custumerService.updateCustumer(params.id, custumer).
            then((response)=> {
                console.log(response);
            }).catch((error) =>{
                console.log(error)
            })
        }else{
            custumerService.saveCustumer(custumer).
            then((response)=> {
                console.log(response);
            }).catch((error) =>{
                console.log(error)
            })
        }
        
        navigate('/')
    }
    const clear = (e) => {
        e.preventDefault();
        setCustumer({
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        })
    }

    useEffect(()=>{
        if(params.id){
            setIsUpdate(true);
        }else{setIsUpdate(false);}
    },[])

    useEffect(()=> {
        console.log(params.id);
        const fetch_data = async() =>{
            try {
                const custumer = await custumerService.getCustumerById(params.id);
                setCustumer(custumer.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetch_data();
    }, []);

    return (
    <div className='felx max-w-2xl mx-auto shadow border-b items-center justify-center'>
        <div className='px-8 py-8'>
            <div className='font-thin text-1xl tracking-woder'>
                {isUpdate? <h1>Update Custumer</h1> : <h1>Create Custumer</h1>}
                
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input 
                    type='text' 
                    className='h-10 w-96 border border-gray-400 appearance-none rounded-none rounded-md  mt-2 px-2 py-2'
                    name="firstName"
                    value={custumer.firstName}
                    onChange={(e) => handleChange(e)}
                    >    
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input 
                    type='text' 
                    className='h-10 w-96 border border-gray-400 appearance-none rounded-none rounded-md  mt-2 px-2 py-2'
                    name="lastName"
                    value={custumer.lastName}
                    onChange={(e)=>handleChange(e)}
                    >
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Phone</label>
                <input 
                    type='text' 
                    className='h-10 w-96 border border-gray-400 appearance-none rounded-none rounded-md  mt-2 px-2 py-2'
                    name="phone"
                    value={custumer.phone}
                    onChange={(e)=>handleChange(e)}
                    >
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input 
                    type='text' 
                    className='h-10 w-96 border border-gray-400 appearance-none rounded-none rounded-md  mt-2 px-2 py-2'
                    name="email"
                    value={custumer.email}
                    onChange={(e)=>handleChange(e)}
                    >
                </input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveCustumer} className='rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6'>
                    {isUpdate? (
                        "Update"
                    ):(
                        "Save"
                    )}
                    
                </button>
                <button onClick={clear} className='rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6'>
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}
