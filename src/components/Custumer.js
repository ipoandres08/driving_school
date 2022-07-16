import React from 'react'
import { Link } from 'react-router-dom'

export const Custumer = ({custumer}) => {
  return (
    <tr key={custumer.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{custumer.firstName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{custumer.lastName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{custumer.phone}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{custumer.email}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
        <Link to={`/edit-custumer/${custumer.id}`} className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</Link>
        <a href='#' className='text-indigo-600 hover:text-indigo-800'>Delete</a>
        </td>
    </tr>
  )
}
