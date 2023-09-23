import Cards from '../components/ui/dashboard/card/Cards'
import Chart from '../components/ui/dashboard/chart/Chart'
import Feedback from '../components/ui/dashboard/feedback/Feedback'
import Products from '../components/ui/dashboard/products/Products'
import './shared.css'

const HomeScreen = () => {
  return (
    <div className="home-page">
      <div className="dashboard-container">
        <div className='dashboard-row'>
          <div className='dashboard-slates'>
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className='dashboard-feedbacks'>
            <Feedback />
            <Feedback />
          </div>
        </div>
        <div className='dashboard-row'>
          <div className='dashboard-chart'>
            <Chart />
          </div>
          <div className='dashboard-products'>
            <Products />
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen