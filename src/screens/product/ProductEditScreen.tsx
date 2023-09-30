import ProductEdit from "../../components/products/product-form/ProductEdit";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const ProductEditScreen = () => {
  useDocumentTitle('Edit Product|Shorpe!', false);

  return (
    <div className="container">
      <ProductEdit />
    </div>
  )
}

export default ProductEditScreen