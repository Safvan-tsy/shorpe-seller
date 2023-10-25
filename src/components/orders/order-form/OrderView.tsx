import { Link } from 'react-router-dom';
import '../order-table/orderlist.css'
import './order-form.css'

const OrderView = () => {
  const status = "Pending"
  return (
    <>
      <div className='order-form-container'>
        <h3>ORDER DETAILS</h3>
        <form className='order-form'>
          <table>
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">SHIPPING ADDRESS</th>
                <th scope='col'>Date</th>
                <th scope="col">Total(₹)</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Items">
                  <Link to='/'>
                    <div className="items">
                      <div className="items__title">lorem ipsum dolor sit amet</div>
                    </div>
                  </Link>
                </td>
                <td data-label="Address">Manikulath(H) Parappanpoyil(PO)</td>
                <td data-label="Date">2023-07-08</td>
                <td data-label="Total(₹)">899</td>
                <td data-label="Status" className='item-td'>
                  <div className="items">
                    <div className="items__title">{status}</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default OrderView