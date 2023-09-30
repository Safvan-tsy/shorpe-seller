import { Pagination } from '@mui/material'
import './productlist.css'
import { FiEdit } from 'react-icons/fi'
import { LuView } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='product-list-component'>
      <Link to='/products/add'>
        <button className='icon-btn'> Add Product <FiEdit /></button>
      </Link>
      <table>
        <caption><h3>Products List</h3></caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">Airpods Wireless Bluetooth Headphones</td>
            <td data-label="Price">₹ 89.99</td>
            <td data-label="Status">Listed</td>
            <td>
              <Link to='/products/edit/:id'>
                <button className='icon-btn'><FiEdit /></button>
              </Link>
              <Link to='/products/view/:id'>
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

export default ProductList