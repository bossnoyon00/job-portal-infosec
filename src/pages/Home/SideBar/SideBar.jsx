import React, { useContext } from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import arvindSir from '../../../assets/Frame 36.png'
import refer from '../../../assets/Network.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import editPP from '../../../assets/edit.png';
import LogOut from '../../../assets/exit 1 (1).png';
import resume from '../../../assets/resume.png';
import loginUser from '../../../assets/User.png';
import security from '../../../assets/settings.png';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaArrowLeft, FaHamburger, FaHammer, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import jobseker from '../../../assets/job-seeker 1 (1).png'

import candidate from '../../../assets/add (1).png'
import { IoIosNotifications, IoIosNotificationsOutline } from 'react-icons/io';
const SideBar = () => {


    const [show, setShow] = useState(false);
    const location = useLocation();
    // console.log(location);
    const { id } = useParams();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { logOut, user } = useContext(AuthContext);

    const shouldHideDiv = location.pathname === `/refer/${id}` || location.pathname === `/details/${id}`;
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className='col-lg-3'>
            <div className={`d-flex d-lg-none align-items-center justify-content-between ${shouldHideDiv ? 'd-none' : ''}`}>
                {location.pathname === '/allJobs' || location.pathname === `/details/${id}` ? (
                    <div className='d-flex gap-3 aligns-items-center'>
                        <Link ><FaArrowLeft to='/'></FaArrowLeft></Link>
                        <h5>All Jobs</h5>
                    </div>
                ) : (
                    <Button variant="primary" className="mt-4 position-absolute top-0" onClick={handleShow}>
                        <GiHamburgerMenu></GiHamburgerMenu>
                    </Button>
                )}
                {
                    location.pathname === '/allJobs' || location.pathname === `/details/${id}` ? '' : <InputGroup className='me-4' style={{ marginLeft: '70px' }}>
                        <Form.Control type='search' name='search' placeholder='ui/ux design' aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text> <FaSearch></FaSearch> </InputGroup.Text>
                    </InputGroup>
                }
                {
                    location.pathname === '/allJobs' || location.pathname === `/details/${id}` ? '' : <p className='mt-3 me-2'><IoIosNotificationsOutline></IoIosNotificationsOutline></p>
                }


            </div>

            <Alert variant="" className="d-none d-lg-block">

            </Alert>


            <Offcanvas show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header className={location.pathname == '/allJobs' ? 'd-none' : 'd-lg-none d-block'} closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div style={{ backgroundColor: 'rgba(242, 242, 242, 1)', height: '600px' }} className='rounded-3 p-4 sticky-top w-100'>
                        <div className='ms-3 mb-3 text-center'>
                            {user ?
                                <>
                                    <img style={{ width: '70px', height: '70px' }} className='rounded-5' src={user?.photoURL} alt="" />
                                    <h4 className='text-center'>{user?.displayName}</h4>
                                    <p style={{ color: 'rgba(22, 118, 243, 1)' }} className='d-lg-none fw-bold'>Update Profile</p>
                                </>
                                :
                                <>
                                    <img src={arvindSir} alt="" />
                                    <h4 className='text-center'>Dr. Arvind K</h4>
                                    <p style={{ color: 'rgba(22, 118, 243, 1)' }} className='d-lg-none fw-bold'>Update Profile</p>
                                </>
                            }
                        </div>


                        <div className='list-unstyled d-none d-lg-block mt-2'>
                            <li className='fw-bold'>{
                                location.pathname == `/refer/${id}` ? <div>
                                    <img src={jobseker} alt="" />
                                    <span className='ms-1'>My Jobs</span>
                                </div> : <div>
                                    <img src={jobseker} alt="" />
                                    <span className='ms-1'>Jobs</span>
                                </div>
                            }</li>
                            <li className='ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Favorite Jobs' : 'Marked Jobs'
                                }
                            </li>
                            <li className='ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Referred Jobs' : 'Applied Jobs'
                                }
                            </li>
                            <li className='ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Closed Jobs' : 'Closed Jobs'
                                }
                            </li>
                        </div>

                        <div className="d-lg-none mt-2">
                            <Dropdown onToggle={handleDropdownToggle}>
                                <Dropdown.Toggle className="text-decoration-none text-black" variant="link" id="dropdownMenuLink">
                                    {
                                        location.pathname === `/refer/${id}` ? (
                                            <div>
                                                <img src={jobseker} alt="" />
                                                <span className="ms-1">My Jobs</span>
                                            </div>
                                        ) : (
                                            <div>
                                                <img src={jobseker} alt="" />
                                                <span className="ms-1">Jobs</span>
                                            </div>
                                        )
                                    }
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right dropdown-menu-bottom" show={isDropdownOpen}>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'Favorite Jobs' : 'Marked Jobs'}
                                    </Dropdown.Item>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'Referred Jobs' : 'Applied Jobs'}
                                    </Dropdown.Item>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        Closed Jobs
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='list-unstyled  d-none d-lg-block  mt-2'>
                            <li className='fw-bold'>
                                {
                                    location.pathname == `/refer/${id}` ?
                                        <div>
                                            <img style={{ width: '24px' }} src={resume} alt="" />
                                            <span>My Applications</span>
                                        </div> : <div>
                                            <img src={candidate} alt="" />
                                            <span className='ms-1'>Candidates</span>
                                        </div>
                                }
                            </li>
                            <li className='mb-1 ms-4'>

                                {
                                    location.pathname == `/refer/${id}` ? 'All' : <li>Add a candidate <br /> to your database </li>
                                }
                            </li>
                            <li className='mb-1 ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Under Process' : <li>Yours Candidate <br /> database</li>
                                }
                            </li>
                            <li className='mb-1 ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Offers' : <li>Referred Candidates</li>
                                }

                            </li>
                            <li className='mb-1  ms-4'>
                                {
                                    location.pathname == `/refer/${id}` ? 'Closed Jobs' : <li>Selected Candidates</li>
                                }
                            </li>

                        </div>


                        {/* Small Device */}

                        <div className="list-unstyled d-lg-none mt-2">
                            <Dropdown onToggle={handleDropdownToggle}>
                                <Dropdown.Toggle className="text-decoration-none text-black" variant="link" id="dropdownMenuLink">
                                    {
                                        location.pathname === `/refer/${id}` ? (
                                            <div>
                                                <img style={{ width: '24px' }} src={resume} alt="" />
                                                <span>My Applications</span>
                                            </div>
                                        ) : (
                                            <div>
                                                <img src={candidate} alt="" />
                                                <span className="ms-1">Candidates</span>
                                            </div>
                                        )
                                    }
                                </Dropdown.Toggle>
                                <Dropdown.Menu show={isDropdownOpen} className="dropdown-menu-right dropdown-menu-bottom">
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'All' : 'Add a candidate to your database'}
                                    </Dropdown.Item>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'Under Process' : 'Your Candidate database'}
                                    </Dropdown.Item>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'Offers' : 'Referred Candidates'}
                                    </Dropdown.Item>
                                    <Dropdown.Item active={location.pathname === `/refer/${id}`}>
                                        {location.pathname === `/refer/${id}` ? 'Closed Jobs' : 'Selected Candidates'}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>



                        <div className='mt-3 w  list-unstyled'>
                            <li className='fw-bold mb-2'>
                                <div>
                                    <img src={refer} alt="" />
                                    <span className='ms-1'>Referrals</span>
                                </div>

                            </li>
                            <li className='fw-bold mb-3'>
                                {
                                    location.pathname == `/refer/${id}` ? <div>
                                        <img src={editPP} alt="" />
                                        <span className='ms-1'>My Profile</span>
                                    </div> :
                                        <div>
                                            <img src={editPP} alt="" />
                                            <span>View/Update Profile</span>
                                        </div>
                                }
                            </li>
                            <li className='fw-bold my-4 mb-1'>
                                <img src={security} alt="" />
                                <span className='ms-1'>Setting</span>
                            </li>
                            {user ?
                                <li onClick={handleLogOut} className='fw-bold mb-1  '><div>
                                    <img src={LogOut} alt="" />
                                    <span className='ms-1'>Log Out</span>
                                </div></li> : <NavLink to='/login' className='fw-bold text-decoration-none text-black mb-1 '>
                                    <div>
                                        <img src={loginUser} alt="" />
                                        <span className='ms-1'>Log in</span>
                                    </div>
                                </NavLink>
                            }
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default SideBar;