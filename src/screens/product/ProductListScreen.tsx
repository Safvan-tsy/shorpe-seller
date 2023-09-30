import ProductList from "../../components/products/productTable/ProductList"
import useDocumentTitle from "../../hooks/useDocumentTitle";
import './products-shared.css'

const ProductListScreen = () => {
  useDocumentTitle('Products | Shorpe!', false);

  return (
    <div className="product-list-container">
       <ProductList/>
    </div>
  )
}

export default ProductListScreen