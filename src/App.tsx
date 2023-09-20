import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/ui/header/Header'

function App() {

  return (
    <>
    <Header/>
    <main className='main-container'>
          <div className='outlet-container'>
          <Outlet />
          </div>
      </main>
    <footer>hi</footer>
    <ToastContainer />
    </>
  )
  }

export default App
