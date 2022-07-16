import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import custumerService from '../services/custumerService';
import { Custumer } from './Custumer';

export const CustumerList = () => {
   
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [custumers, setCustumers] = useState(null);

    useEffect(() => {
      const fetch_data = async() => {
        setLoading(true);
        try {
            const response = await custumerService.getCustumers();
            setCustumers(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
      };
      fetch_data();
    }, [])
    
    return (
    <div className='my-8 mx-8'>
        <div className='h-12 py-0'>
            <button  onClick={()=> navigate('/addCustumer')} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Custumer</button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Phone</th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Email</th>
                        <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-white'>
                        {custumers.map((custumer)=>(
                        <Custumer custumer={custumer} key={custumer.id}/>
                        ))}
                    </tbody>
                )}    
            </table>
        </div>
    </div>
  )
}
