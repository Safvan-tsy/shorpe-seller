import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const SellerRoute = () => {
    const { sellerInfo } = useSelector((state: RootState) => state.auth);

    return sellerInfo && sellerInfo.isSeller ? (<Outlet />) : (<Navigate to='/login' />)
}
