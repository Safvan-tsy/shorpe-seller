import { useState } from 'react'
import './productlist.css'
import { Pagination } from '@mui/material'
import { FiEdit } from 'react-icons/fi'
import { LuView } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ProductView from '../product-form/ProductView'

const ProductList = () => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
              <button className='icon-btn' onClick={onOpenModal}><LuView /></button>
              <Modal open={open} onClose={onCloseModal} center>
                <ProductView/>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={1} className='pagination-container' />
    </div>
  )
}

export default ProductList