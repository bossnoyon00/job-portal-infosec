import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Pagination from 'react-bootstrap/Pagination';
const ShowAllJobs = ({ job }) => {

    const [buttonName, setButtonName] = useState('Marked Job');


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
    // console.log(job);
    return (
        <div>
            <div style={{ backgroundColor: 'rgba(237, 249, 255, 1)' }} className='d-flex p-2 rounded container mb-lg-0 mb-2 align-items-center justify-content-between'>
                <div className='mb-lg-3'>
                    <div className='d-flex gap-3 align-items-center'>
                        <img style={{ width: '30px', height: '30px' }} className='rounded-5' src={job.logo} alt="" />
                        <h6 className='fw-bold mt-0 mb-0 fs-6'>{job.title}</h6>
                        <span className='d-none fs-6 d-lg-block'>(10 out of 50 applicant received)</span>
                    </div>
                    <div className='ms-5'>
                        <span style={{ fontSize: '12px' }} className='d-lg-none text-muted'>(10 out of 50 applicant received)</span>
                        <p style={{ fontSize: '13px' }} className='mt-0 mb-0'>Application received : {job.applicationReceived}</p>
                        <p style={{ fontSize: '14px' }} className='mt-0 mb-0 '>Workplace type : {job.RemoteOrOnSIte}</p>
                        <p style={{ fontSize: '14px' }} className='mt-0 mb-0 '>Post On <br /> <span className='text-muted mt-0'>{job.date}</span> <span className='ms-lg-5 mt-0 text-muted'>{job.time}</span></p>
                    </div>

                </div>
                <div className='d-flex gap-3 flex-column '>
                    <Link style={{ fontSize: '12px' }} to={`/details/${job.id}`} className='btn btn-sm  text-black btn-outline-primary'>View Details</Link>
                    <Link style={{ fontSize: '12px' }} to={`/refer/${job.id}`} className='btn btn-sm  text-black btn-outline-primary'>Refer Candidate</Link>
                    <button style={{ fontSize: '12px' }} onClick={handleClick} className='btn btn-sm text-black btn-outline-primary'>{buttonName}</button>
                </div>



            </div>

            <nav className='d-flex d-none justify-content-center mt-3' aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ShowAllJobs;