import React, { useContext } from 'react';
import { Link, useLocation, useParams, NavLink } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import infosecLogo from '../../../assets/INFOSEC.jpeg';
import allJob from '../../../assets/Job.png';
import Cv from '../../../assets/CV.png';
import resume from '../../../assets/Resume.png';
import search from '../../../assets/job search 1.png';
import home from '../../../assets/home 1.png';
import viewPP from '../../../assets/view.png';
import editPP from '../../../assets/edit.png';
import security from '../../../assets/settings.png';
import privacy from '../../../assets/security 1.png';
import logout from '../../../assets/exit 1.png';
import jobs from '../../../assets/job-seeker 1.png';
import refer from '../../../assets/Network.png';
import user1 from '../../../assets/User.png';
import fav from '../../../assets/FAB.png';
import { FaPlus, FaPlusCircle } from 'react-icons/fa';


const NavBar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='text-center w-50 mt-3'>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </div>
    }
    const location = useLocation();
    const { id } = useParams();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };



    return (
        <section className='mt-3'>
            <nav className='d-lg-block d-none mt-lg-0 mt-auto  justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link className='d-flex text-decoration-none justify-content-between align-items-center'>
                        <img style={{ width: '50px' }} className='' src={infosecLogo} alt="" />
                        <p className='text-muted mt-3'>Securing Digital World</p>
                    </Link>
                    <ul className='d-flex justify-content-center fs-6 align-items-center'>
                        <div className=''>
                            {
                                location.pathname == `/refer/${id}` ?
                                    <div className='text-center  me-4'>
                                        <img style={{ width: '30px' }} className='' src={Cv} alt="" /> <br />
                                        <NavLink style={{ fontWeight: '600' }} className='text-black text-decoration-none'>Search Jobs</NavLink>
                                    </div> :
                                    <div className='text-center me-4'>
                                        <img style={{ width: '30px' }} className='' src={Cv} alt="" /> <br />
                                        <NavLink style={{ fontWeight: '600' }} className={({ isActive }) => (isActive ? 'text-primary text-decoration-none' : ' text-black text-decoration-none')} to='allJobs' >All Jobs</NavLink>
                                    </div>

                            }
                        </div>
                        <div>
                            {
                                location.pathname == `/refer/${id}` ?
                                    <div className='text-center  me-4'>
                                        <img style={{ width: '30px' }} className='' src={resume} alt="" /> <br />
                                        <Link style={{ fontWeight: '600' }} className='text-black text-decoration-none'>My Applications</Link>
                                    </div>
                                    :
                                    <div className='text-center me-4'>
                                        <img style={{ width: '30px' }} className='' src={resume} alt="" /> <br />
                                        <NavLink style={{ fontWeight: '600' }} to='/addCandidate' className={({ isActive }) => (isActive ? 'text-primary  text-decoration-none' : 'text-black text-decoration-none')}>Add a Candidate</NavLink>
                                    </div>
                            }
                        </div>
                        <div>
                            <>
                                {
                                    user ? <div>
                                        <img className='rounded-5 ms-4' style={{ width: '30px', height: '30px' }} src={user.photoURL} alt="" />
                                        <Dropdown className=''>
                                            <Dropdown.Toggle style={{ fontWeight: '600' }} variant="" id="dropdown-basic">

                                                My Profile
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"><div>
                                                    <img src={viewPP} alt="" />
                                                    <span>View Profile</span>
                                                </div></Dropdown.Item>
                                                <Dropdown.Item href="#/action-2"><div>
                                                    <img src={editPP} alt="" />
                                                    <span>Edit Profile</span>
                                                </div></Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    <div>
                                                        <img src={security} alt="" />
                                                        <span>Security Settings</span>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-4"><div>
                                                    <img src={privacy} alt="" />
                                                    <span>Privacy Settings</span>
                                                </div></Dropdown.Item>
                                                <Dropdown.Item onClick={handleLogOut} href="#/action-5">
                                                    <div>
                                                        <img src={logout} alt="" />
                                                        <span>Log out</span>
                                                    </div>

                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                        :
                                        <Link className='btn btn-outline-primary' to='/login'>Login</Link>
                                }
                            </>
                        </div>
                    </ul>
                </div>
            </nav>
            <section className='d-lg-none'>
                <nav style={{ backgroundColor: 'rgba(19, 61, 122, 1)' }} className='d-flex gap-3 fixed-bottom position-fixed position-absolute bottom-0 justify-content-center align-items-center py-2 text-white '>
                    <div className='text-center'>
                        <img src={home} alt="" />
                        <NavLink to='/' style={{ fontSize: '13px' }} className='text-decoration-none text-white'>Home</NavLink>
                    </div>
                    <div className='text-center'>
                        <img src={jobs} alt="" />
                        <NavLink to='/allJobs' style={{ fontSize: '13px' }} className='text-decoration-none text-white'>Jobs</NavLink>
                    </div>
                    <img style={{ bottom: '36px', marginRight: '30px' }} className='position-absolute me-3 mt-1' src={fav} alt="" />
                    <div className='text-center'>
                        <NavLink to='/addCandidate' style={{ fontSize: '13px' }} className='text-decoration-none text-white'>Add a Candidate</NavLink>
                    </div>
                    <div className='text-center'>
                        <img src={refer} alt="" />
                        <NavLink to='/refer' style={{ fontSize: '13px' }} className='text-decoration-none text-white'>Referrals</NavLink>
                    </div>

                    <div className='text-center'>
                        <img src={user1} alt="" />
                        <NavLink style={{ fontSize: '13px' }} className='text-decoration-none text-white'>Profile</NavLink>
                    </div>
                </nav>
            </section>
        </section>
    );
};

export default NavBar;
