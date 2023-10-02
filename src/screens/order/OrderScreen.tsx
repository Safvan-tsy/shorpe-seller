import OrderView from "../../components/orders/order-form/OrderView"
import useDocumentTitle from "../../hooks/useDocumentTitle";

const OrderScreen = () => {
  useDocumentTitle('Order Details | Shorpe!', false);
  return (
    <div className="container">
      <OrderView />
    </div>
  )
}

export default OrderScreen