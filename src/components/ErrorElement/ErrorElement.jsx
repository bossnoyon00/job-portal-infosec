
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const { error, status } = useRouteError()
    return (
        <section className='d-flex align-items-center  p-16 bg-light-subtle text-danger-emphasis'>
            <div className='container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8'>
                <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1686742241~exp=1686742841~hmac=357154426d2a1744bb9b1d9f468ecae5c678a3baf394273b745a2532bd707c9e' className='w-50 text-yellow-500' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn btn-danger'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorElement;