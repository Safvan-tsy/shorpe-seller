import { useState } from 'react'
import './productlist.css'
import { Alert, Pagination } from '@mui/material'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { LuView } from 'react-icons/lu'
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ProductView from '../product-form/ProductView'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useDeleteProductMutation, useGetProductsQuery } from '../../../redux/slices/productApiSlice';
import Loader from '../../ui/loader/Loader';
import DeleteWarning from '../../ui/warning/DeleteWarning';

const ProductList = () => {
  const navigate = useNavigate();

  const [productModalStates, setProductModalStates] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const token = useSelector((state: RootState) => state.auth.token);
  const { page, limit } = useParams<{ page: string, limit: string }>();

  const { data: res, isLoading, error, refetch } = useGetProductsQuery({ page: page ?? '1', limit: limit ?? '5', token });
  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

  const deleteHandler = async (prodId: string) => {
    try {
      await deleteProduct({ prodId, token });
      toast.success('Deleted');
      refetch();
      setDeleteModalOpen(false);
    } catch (error) {
      toast.error('error?.data?.message || error.error');
    }
  };


  const handlePageChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    const newPage = value.toString();
    const newLimit = limit ?? '5';
    navigate(`/products/${newPage}/${newLimit}`);
  }
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setProductModalStates({ ...productModalStates, [product._id]: true });
  };

  const closeProductModal = (productId) => {
    setSelectedProduct(null);
    setProductModalStates({ ...productModalStates, [productId]: false });
  };

  return (
    <div className='product-list-component'>
      {error && <Alert severity="error">Failed to Fetch Products</Alert>}
      {isLoading || loadingDelete ? <Loader /> : (
        <Link to='/products/add'>
          <button className='icon-btn'> Add Product <FaEdit /></button>
        </Link>
      )}
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
          {res?.products.map((product) => (
            <tr key={product._id}>
              <td data-label="Name">{product.name}</td>
              <td data-label="Price">₹ {product.price}</td>
              <td data-label="Status">{product.status}</td>
              <td>
                <Link to={`/products/edit/${product._id}`}>
                  <button className='icon-btn'><FaEdit /></button>
                </Link>
                <button className="icon-btn" onClick={() => openProductModal(product)}><LuView /></button>
                <button className='icon-btn' onClick={() => {
                  setProductToDelete(product);
                  setDeleteModalOpen(true);
                }}><FaTrash /></button>

                <Modal open={productModalStates[product._id]} onClose={() => closeProductModal(product._id)} center>
                  {selectedProduct && <ProductView product={selectedProduct} />}
                </Modal>
                <DeleteWarning
                  isOpen={deleteModalOpen}
                  onClose={() => setDeleteModalOpen(false)}
                  productName={productToDelete?.name}
                  onConfirm={() => deleteHandler(productToDelete?._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        count={res?.totalPages}
        page={parseInt(page ?? '1')}
        onChange={handlePageChange}
        className='pagination-container'
      />
    </div>
  )
}

export default ProductList