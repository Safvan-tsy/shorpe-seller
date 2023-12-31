import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/ui/header/Header';
import Footer from './components/ui/footer/Footer';
import { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {
  const { sellerInfo } = useSelector((state: RootState) => state.auth);

  return (
    <div className="app-container">
      {sellerInfo && <Header />}
      <main className="main-content">
        <div className="outlet-container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;