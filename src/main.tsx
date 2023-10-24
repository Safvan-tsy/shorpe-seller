import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx'
import HomeScreen from './screens/HomeScreen.tsx';
import NotFoundScreen from './screens/NotFoundScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import { SellerRoute } from './components/route/SellerRoute.tsx';
import ProductListScreen from './screens/product/ProductListScreen.tsx';
import ProductScreen from './screens/product/ProductScreen.tsx';
import ProductEditScreen from './screens/product/ProductEditScreen.tsx';
import AddProductScreen from './screens/product/AddProductScreen.tsx';
import OrderListScreen from './screens/order/OrderListScreen.tsx';
import OrderScreen from './screens/order/OrderScreen.tsx';
import OrderUpdateScreen from './screens/order/OrderUpdateScreen.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='' element={<SellerRoute />}>
        <Route index={true} path='/' element={<HomeScreen />} />

        <Route path='/products' element={<ProductListScreen />} />
        <Route path='/products/:page/:limit' element={<ProductListScreen />} />
        <Route path='/products/add' element={<AddProductScreen />} />
        <Route path='/products/view/:id' element={<ProductScreen />} />
        <Route path='/products/edit/:id' element={<ProductEditScreen />} />

        <Route path='/orders' element={<OrderListScreen />} />
        <Route path='/orders/view/:id' element={<OrderScreen />} />
        <Route path='/orders/edit/:id' element={<OrderUpdateScreen />} />

      </Route>
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
