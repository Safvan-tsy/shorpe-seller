import OrderList from "../../components/orders/order-table/OrderList";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const OrderListScreen = () => {
  useDocumentTitle('Orders | Shorpe!', false);

  return (
    <div className="container">
      <OrderList />
    </div>
  )
}

export default OrderListScreen