import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaArrowLeft } from 'react-icons/fa';
import {
    useLoaderData,
    useParams,
    Link
} from "react-router-dom";


const ReferJob = () => {
    const [details, setDetails] = useState([]);
    const jobs = useLoaderData();
    // console.log(jobs);
    const { id } = useParams();
    useEffect(() => {
        const detailsData = jobs.find(dt => dt.id == id);
        setDetails(detailsData);
        console.log(detailsData);
    }, []);
    return (
        <div className='my-5 m-auto ms-3'>
            <div className='d-flex align-items-center'>
                <Link to='/allJobs'> <FaArrowLeft></FaArrowLeft> </Link>
                <h5 className='ms-3 mt-1'>Refer Candidate</h5>
            </div>
            <p className='fw-bold'>Basic Details</p>
            <form className='w-100'>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Full Name :</label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Email Id : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Contact : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <span className='ms-3'>Add from database</span>
                </div>
            </form>

            <div>
                <h3>Professional Qualifications</h3>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">College university name : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">Degree name : </label>
                        <div class="input-group w-100">
                            <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">Passout year (mm/yy): </label>
                        <div class="input-group w-100">
                            <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                        </div>
                    </div>

                </div>
                <div>
                    <button className='border-0'>+ Add new</button>
                </div>
            </div>
            <div className='mt-5'>
                <table class="table w-75 mx-auto table-bordered">
                    <thead>
                        <tr className=''>
                            <th style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }} className='text-center '>College/University <br /> Name</th>
                            <th className='text-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }}>Degree Name</th>
                            <th className='text-center mb-1 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }}>Passout year (mm/yy) :</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                            <td style={{ fontSize: '13px' }}>Sample</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-5'>
                <h3>Experience</h3>

                <div className='d-flex gap-3 align-items-center '>
                    <p>Is Experience</p>
                    <div className='d-flex gap-2 justify-content-center  align-items-center' >
                        <input className='mb-2' type="radio" name="" id="" />

                        <p>Yes</p>
                    </div>
                    <div className='d-flex gap-2 justify-content-center  align-items-center'>
                        <input className='mb-2' type="radio" name="" id="" />
                        <p>No</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Organization Name : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Designation : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>

            </div>

            <div class="mb-3">
                <label for="basic-url" class="form-label">Responsibilities : </label>
                <div class="input-group w-100">
                    <input type="text" className="form-control p-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Joining Date (mm/yy) : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="basic-url" class="form-label">Relieving Date (mm/yy) : </label>
                    <div class="input-group w-100">
                        <input type="text" className="form-control px-5 w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                    </div>
                </div>

            </div>

            <p>Total Experience</p>
            <p>6 months</p>

            <div className=' mt-5'>
                <table class="table w-50 mx-auto table-bordered">
                    <thead>
                        <tr className=''>
                            <th style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }} className='text-center text-muted'>Organization <br /> Name </th>
                            <th className='text-center text-muted' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }}>Designation </th>
                            <th className='text-center text-muted mb-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }}>Responsibilities</th>
                            <th className='text-center text-muted mb-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', fontSize: '10px' }}>Total <br /> Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontSize: '10px' }} className='text-muted'>Infosec Future</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>UI?UX designer</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>Sample</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>6 month</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: '10px' }} className='text-muted'>ABC</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>Developer</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>Develop web app</td>
                            <td style={{ fontSize: '10px' }} className='text-muted'>1 year</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Skills</h3>
                <p>Minimum Requirements <span className='text-muted'>(Add required skills and experience in particular skills) </span>:</p>

                <div className='d-flex d-none gap-5'>
                    <div>
                        <p>Figma</p>
                        <input disabled type="text" name='' placeholder='3 Years' />
                    </div>
                    <div>
                        <p>Adobe XD </p>
                        <input disabled type="text" name='' placeholder='2 Years' />
                    </div>
                </div>
                <div className='mt-3'>
                    <button className='border-0 rounded'>+ Add new</button>
                </div>
            </div>
            <div>
                <h3 className='mt-3'>Screening question</h3>


                <p>   <span className='fw-bold '>1.</span>Why did you apply for this position ?</p>
                <p>Answer:</p>
                <input className='w-100 p-3' type="text" placeholder='' />
                <p className='mt-4'> <span className='fw-bold '>2.</span>  What is your expected salary ?</p>


                <p>Answer:</p>
                <input className='w-100 p-3' type="text" placeholder='' />

                <p className='mt-4'> <span className='fw-bold'>3.</span> Are you compatible to relocate ?</p>

                <p>Answer:</p>
                <input className='w-100 p-3' type="text" placeholder='' />
            </div>

            <h3 className='my-4'>Resume Upload</h3>
            <p className='ms-5'>Or</p>
            <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-1'>Upload from <br /> candidates profile</span>
            </div>

            <h3 className='my-4'>Cover Upload</h3>
            <p className='ms-5'>Or</p>
            <div>
                <input type="checkbox" name="" id="" />
                <span className='ms-1'>Upload from <br /> candidates profile</span>
            </div>

            <h5 className='my-4'>Any Special remarks/Requests</h5>
            <input type="text" className='p-4 w-100' />

            <div className='d-flex justify-content-end gap-4 mt-3'>
                <button className='btn mb-4 text-black btn-outline-secondary'>Cancel</button>
                <button className='btn btn-primary mb-4'>Refer</button>
            </div>
        
        </div>
    );
};

export default ReferJob;