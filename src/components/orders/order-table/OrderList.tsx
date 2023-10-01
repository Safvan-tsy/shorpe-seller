import './orderlist.css'
import { Pagination } from '@mui/material'
import { FiEdit } from 'react-icons/fi'
import { LuView } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const OrderList = () => {
  return (
    <div className='order-list-component'>
      <table>
        <caption><h3>Orders List</h3></caption>
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Total Price</th>
            <th scope="col">Status</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Order Id">5f5b74f786b194001c48f35a</td>
            <td data-label="Toatl Price">₹ 899</td>
            <td data-label="Status">Pending</td>
            <td>
              <Link to='/orders/edit/:id'>
                <button className='icon-btn'><FiEdit /></button>
              </Link>
              <Link to='/orders/view/:id'>
                <button className='icon-btn'><LuView /></button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={1} className='pagination-container' />
    </div>
  )
}

export default OrderList