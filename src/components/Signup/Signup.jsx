import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setError('');

        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                updateUserData(result.user, photo, name);
                navigate('/');
                form.reset();

                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered!',
                });
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);

                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
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

    const updateUserData = (user, photo, name) => {
        updateProfile(user, {
            photoURL: photo,
            displayName: name,
        })
            .then(() => {
                console.log('User photo updated');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card mt-5 border-danger">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Register now!</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="photo">Photo URL</label>
                                    <input type="text" name="photo" className="form-control" id="photo" placeholder="Enter your photo URL" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Enter your password" required />
                                    <small className="form-text text-muted">
                                        <a href="#" className="link">Forgot password?</a>
                                    </small>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                                <div className="text-center mt-3">
                                    <p className="mb-0">Already have an account? <Link className="font-weight-bold text-decoration-none text-danger" to="/login">Please login</Link></p>
                                </div>
                                <p className="text-danger">{error}</p>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-secondary btn-block mt-3" onClick={handleGoogleSignIn}>
                                        Sign in with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
