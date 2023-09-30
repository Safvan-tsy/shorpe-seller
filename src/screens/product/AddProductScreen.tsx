import ProductAdd from "../../components/products/product-form/ProductAdd";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const AddProductScreen = () => {
  useDocumentTitle('Add Product|Shorpe!', false);

  return (
    <div className="container">
      <ProductAdd />
    </div>
  )
}

export default AddProductScreen