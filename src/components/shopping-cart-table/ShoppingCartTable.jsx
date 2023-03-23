import React from 'react'
import './shopping-cart-table.css'
import {BsFillTrash3Fill} from 'react-icons/bs'
import {AiOutlineDollarCircle, AiOutlineCloseCircle} from 'react-icons/ai'

export const ShoppingCartTable = () => {
  return (
    <div className='shopping-cart-table'>
        <h2>Your order</h2>
        <table className='table'>
            <thead>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>$32</td>
                    <td className='gap'>
                        <button className='btn btn-outline-success'>
                            <AiOutlineDollarCircle className='center'/>
                        </button>
                        <button className='btn btn-outline-warning'>
                            <AiOutlineCloseCircle className='center'/>
                        </button>
                        <button className='btn btn-outline-danger'>
                            <BsFillTrash3Fill className='center'/>
                        </button>
                    </td>
                </tr>
                
                
            </tbody>
        </table>

        <div className='total-price'>Total price: $210</div>
    </div>
  )
}
