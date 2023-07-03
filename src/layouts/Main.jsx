import React from 'react';
import NavBar from '../pages/Home/NavBar/NavBar';
import SideBar from '../pages/Home/SideBar/SideBar';
import { Outlet, useLocation, useParams } from 'react-router-dom'
import ExtraPan from '../components/ExtraPan/ExtraPan';
const Main = () => {
    const location = useLocation();
    const { id } = useParams();
    return (
        <div>
            <NavBar></NavBar>
            <div className='d-lg-flex'>
                <SideBar></SideBar>
                {/* <h2 className={location.pathname === '/addCandidate' ? 'd-block' : 'd-none'}>Content Coming Soon</h2> */}
                <Outlet></Outlet>
                <div style={{ marginLeft: '663px' }} className={location.pathname === '/allJobs' || location.pathname === `/refer/${id}` || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === `/details/${id}` ? 'd-none' : ''}>
                    <ExtraPan></ExtraPan>
                </div>

                <div className={location.pathname === '/' || location.pathname ===
                    '/addCandidate' ? 'd-none' : ''}>
                    <ExtraPan></ExtraPan>
                </div>
            </div>
        </div >
    );
};

export default Main;