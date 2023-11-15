import React from 'react';
import errorPage from '../../assets/doctor/error.gif'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, setError} = useRouteError()
    return (
        <div className='flex items-center justify-center mx-auto h-screen '>
            <div>
            <h2 className='text-center text-6xl font-bold mb-4'>Error</h2>
            <img src={errorPage} alt="" className='mx-auto'/>
            <p className='text-center text-xl font-semibold md:text-3xl mb-8'>We can't find the page you're looking for.</p>
            <div className='flex items-center justify-center'>
            <button className='btn2 mt-4'><Link to='/'>Go Back Home</Link></button>
            </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;