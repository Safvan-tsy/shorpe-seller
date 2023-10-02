import OrderUpdate from "../../components/orders/order-form/OrderUpdate"
import useDocumentTitle from "../../hooks/useDocumentTitle";

const OrderUpdateScreen = () => {
  useDocumentTitle('Update Order | Shorpe!', false);

  return (
    <div className="container">
      <OrderUpdate />
    </div>
  )
}

export default OrderUpdateScreen