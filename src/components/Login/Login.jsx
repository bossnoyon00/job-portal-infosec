import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        signIn(email, password)
            .then(() => {
                navigate('/');
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Google Sign-In Successful',
                    text: 'You have successfully signed in with Google!',
                });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);

                Swal.fire({
                    icon: 'error',
                    title: 'Google Sign-In Failed',
                    text: error.message,
                });
            });
    };



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6  border border-danger p-5 rounded-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group my-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </div>
                        <div>
                            <p className="text-center">Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                        <p className="text-danger">{error}</p>

                        <div className="form-control mt-4">
                            <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
