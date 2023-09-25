import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx'
import './index.css'
import HomeScreen from './screens/HomeScreen.tsx';
import NotFoundScreen from './screens/NotFoundScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import { SellerRoute } from './components/route/SellerRoute.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='' element={<SellerRoute />}>
        <Route index={true} path='/' element={<HomeScreen />} />
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
