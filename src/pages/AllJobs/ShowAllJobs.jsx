import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Pagination from 'react-bootstrap/Pagination';

const ShowAllJobs = ({ jobs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonName, setButtonName] = useState('Marked Job');
    const jobsPerPage = 10;
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div>
            {currentJobs.map((job) => (
                <div key={job.id}>
                    <div
                        style={{ backgroundColor: 'rgba(237, 249, 255, 1)' }}
                        className="d-flex p-2 rounded container mb-lg-0 mb-2 align-items-center justify-content-between"
                    >
                        <div className="mb-lg-3">
                            <div className="d-flex gap-3 align-items-center">
                                <img
                                    style={{ width: '30px', height: '30px' }}
                                    className="rounded-5"
                                    src={job.logo}
                                    alt=""
                                />
                                <h6 className="fw-bold mt-0 mb-0 fs-6">{job.title}</h6>
                                <span className="d-none fs-6 d-lg-block">
                                    (10 out of 50 applicant received)
                                </span>
                            </div>
                            <div className="ms-5">
                                <span style={{ fontSize: '12px' }} className="d-lg-none text-muted">
                                    (10 out of 50 applicant received)
                                </span>
                                <p style={{ fontSize: '13px' }} className="mt-0 mb-0">
                                    Application received : {job.applicationReceived}
                                </p>
                                <p style={{ fontSize: '14px' }} className="mt-0 mb-0 ">
                                    Workplace type : {job.RemoteOrOnSIte}
                                </p>
                                <p style={{ fontSize: '14px' }} className="mt-0 mb-0 ">
                                    Post On <br />{' '}
                                    <span className="text-muted mt-0">{job.date}</span>{' '}
                                    <span className="ms-lg-5 mt-0 text-muted">{job.time}</span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 flex-column ">
                            <Link
                                style={{ fontSize: '12px' }}
                                to={`/details/${job.id}`}
                                className="btn btn-sm text-black btn-outline-primary"
                            >
                                View Details
                            </Link>
                            <Link
                                style={{ fontSize: '12px' }}
                                to={`/refer/${job.id}`}
                                className="btn btn-sm text-black btn-outline-primary"
                            >
                                Refer Candidate
                            </Link>
                            <button
                                style={{ fontSize: '12px' }}
                                onClick={handleClick}
                                className="btn btn-sm text-black btn-outline-primary"
                            >
                                {buttonName}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <nav className='d-flex justify-content-center mb-5 mt-3' aria-label="Page  text-center navigation example">
                <Pagination>
                    <Pagination.First
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                    />
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <Pagination.Item
                            key={page}
                            active={currentPage === page}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Pagination.Item>
                    ))}

                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                    <Pagination.Last
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    />
                </Pagination>
            </nav>
        </div>
    );
};

export default ShowAllJobs;
