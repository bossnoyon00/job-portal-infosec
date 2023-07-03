import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const ShowAllJobs = ({ job, jobs }) => {
    console.log(jobs);
    const [buttonName, setButtonName] = useState('Marked Job');
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = jobs.slice(firstIndex, lastIndex)
    const npage = Math.ceil(jobs.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    console.log(records, numbers);

    const handleClick = () => {
        setButtonName(prevName => {
            if (prevName === 'Marked Job') {
                Swal.fire({
                    title: 'Job Unmarked!',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                });
                return 'Unmarked Job';
            } else {
                Swal.fire({
                    title: 'Job Marked!',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                });
                return 'Marked Job';
            }
        });
    };

    const nextPage = () => {
        if (currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1);

        }
    };

    const prePage = () => {
        if (currentPage !== firstIndex) {
            setCurrentPage(currentPage - 1);

        }
    };

    const changeCPage = (id) => {

        setCurrentPage(id);
    };

    return (
        <div>
            {
                records.map((d, i) => (
                    <div style={{ backgroundColor: 'rgba(237, 249, 255, 1)' }} className='d-flex p-2 rounded container mb-lg-0 mb-2 align-items-center justify-content-between' key={i}>
                        <div className='mb-lg-3'>
                            <div className='d-flex gap-3 align-items-center'>
                                <img style={{ width: '30px', height: '30px' }} className='rounded-5' src={d.logo} alt="" />
                                <h6 className='fw-bold mt-0 mb-0 fs-6'>{d.title}</h6>
                                <span className='d-none fs-6 d-lg-block'>(10 out of 50 applicant received)</span>
                            </div>
                            <div className='ms-5'>
                                <span style={{ fontSize: '12px' }} className='d-lg-none text-muted'>(10 out of 50 applicant received)</span>
                                <p style={{ fontSize: '13px' }} className='mt-0 mb-0'>Application received : {d.applicationReceived}</p>
                                <p style={{ fontSize: '14px' }} className='mt-0 mb-0 '>Workplace type : {d.RemoteOrOnSIte}</p>
                                <p style={{ fontSize: '14px' }} className='mt-0 mb-0 '>Post On <br /> <span className='text-muted mt-0'>{d.date}</span> <span className='ms-lg-5 mt-0 text-muted'>{d.time}</span></p>
                            </div>
                        </div>
                        <div className='d-flex gap-3 flex-column '>
                            <Link style={{ fontSize: '12px' }} to={`/details/${d.id}`} className='btn btn-sm  text-black btn-outline-primary'>View Details</Link>
                            <Link style={{ fontSize: '12px' }} to={`/refer/${d.id}`} className='btn btn-sm  text-black btn-outline-primary'>Refer Candidate</Link>
                            <button style={{ fontSize: '12px' }} onClick={handleClick} className='btn btn-sm text-black btn-outline-primary'>{buttonName}</button>
                        </div>
                    </div>
                ))
            }
            <nav className='text-center my-5 ms-5'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href="#" onClick={prePage} className='page-link'>Prev</a>
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a onClick={() => changeCPage(n)} className='page-link' href="#">{n}</a>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <a href="#" onClick={nextPage} className='page-link'>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ShowAllJobs;
