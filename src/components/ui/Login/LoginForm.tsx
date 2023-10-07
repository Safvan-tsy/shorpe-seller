import { useEffect, useState } from 'react';
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/slices/sellersApiSlice';
import { RootState } from '../../../redux/store';
import useDocumentTitle from '../../../hooks/useDocumentTitle';
import { setCredentials } from '../../../redux/slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import Password from "./Password.svg?react";
import Email from "./Email.svg?react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    const { sellerInfo } = useSelector((state: RootState) => state.auth);
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (sellerInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, sellerInfo]);

    useDocumentTitle('Login to Your Account | Shorpee', false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            console.log(err)
            toast.error('Failed to login. Email or Password incorrect');
        }
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                <p id="heading">LOGIN</p>
                <div className="field">
                    <Email/>
                    <input placeholder="Email"
                        className="input-field"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                   <Password/>
                    <input placeholder="Password"
                        className="input-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-btn-div">
                    {
                    isLoading ? <Loader/> 
                    : <button type='submit' className='btn'>Submit</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default LoginForm