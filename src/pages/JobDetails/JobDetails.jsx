import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import {
    useLoaderData,
    useParams,
    Link
} from "react-router-dom";

const JobDetails = () => {
    const [details, setDetails] = useState({});
    const [detail, setDetail] = useState([]);
    const jobs = useLoaderData();
    // console.log(jobs);
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        const detailsData = jobs.find(dt => dt.id == id);
        const expData = detailsData?.experience?.map(skill => skill)
        setDetails(detailsData);
        setDetail(expData)
        // console.log(expData);
    }, []);



    return (
        <div className='col-lg-6  ms-3 my-5'>
            <Link className='' to='/allJobs'> <FaArrowLeft className=''></FaArrowLeft> </Link>
            <div>
                <div>
                    <div className='d-flex mt-5 gap-3 align-items-center'>
                        <img style={{ width: '30px', height: '30px' }} className='rounded-5' src={details.logo} alt="" />
                        <h6 className='fw-bold mt-0 mb-0 fs-6'>{details.title}</h6>
                        <span style={{ fontSize: '12px' }} className='me-3'>(10 out of 50 applicant received)</span>
                    </div>
                    <div className='ms-5'>
                        <p>{details.location}</p>
                        <p>Workplace type : {details.RemoteOrOnSIte}</p>
                        <p>Job Type : {details.fulltimeOrPartTime} </p>
                        <p>Posted On <br /> <span className='me-3'>{details.date}</span>      {details.time}</p>
                    </div>
                </div>


                <div className='mt-5 ms-5'>
                    <h3>Details</h3>

                    <h5 className='mt-4'>Description</h5>
                    <p>{details.jobDescription}</p>
                    <h5>Qualifications</h5>
                    <p>{details.education} <br /> <span className='text-muted'>Nov 2021 - jun 2023</span> </p>
                    <h5>Skills , Experience</h5>
                    <p>{detail[0]?.title} <br /> <span className='text-muted'>{detail[0]?.duration}</span> </p>
                    <p>{detail[1]?.title} <br /><span className='text-muted'> {detail[1]?.duration} </span></p>

                </div>

                <div className='mt-5 ms-5'>
                    <h3>Payout Details</h3>
                    <p>NO. of vacancy</p>
                    <p>No. of application required</p>
                    <p>Annual CTC : {details.annualCTC}</p>
                    <p>Max Budget : {details.maxBudget}</p>
                    <p>Fulltime payout : {details.payoutPercentage} , Fixed Payout</p>
                </div>

                <div className='text-center ms-5 mt-5'>
                    <Link to='/allJobs' className='btn btn-primary px-5'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;