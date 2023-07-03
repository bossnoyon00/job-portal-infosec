import React, { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ShowAllJobs from './ShowAllJobs';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../providers/AuthProvider';
const AllJobs = () => {


    const { loading } = useContext(AuthContext);
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





    const [sortBy, setSortBy] = useState('');
    const [jobs, setAllJobs] = useState([]);
    const [jobPage, setJobPage] = useState([]);
    const [sortByRating, setSortByRating] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [uniqueLocations, setUniqueLocations] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState('');


    useEffect(() => {
        fetch('alljobs.json')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
                setUniqueLocations([...new Set(data.map(job => job.location))]);
            });
    }, []);


    // const totalJob = jobPage.length;
    // const itemsPerPage = 10;

    // const totalPages = Math.ceil(totalJob / itemsPerPage);

    // const pagesNumber = [...Array(totalPages).keys()];





    const handleLocationChange = event => {
        const selectedLocation = event.target.innerText;
        setSearchLocation(selectedLocation);
    };

    const handleTitleSearch = event => {
        const title = event.target.value;
        setSearchTitle(title);
    };

    const handleExperienceChange = experience => {
        setSelectedExperience(experience);
    };

    return (
        <div className='col-lg-6 ms-lg-3 mt-lg-5'>
            <h2 className='d-none d-lg-block'>All Jobs</h2>
            {/* <input
                type='search'
                name='search'
                id=''
                className='w-100'
                placeholder='ui/ux design'
                onChange={handleTitleSearch}
            /> */}
            <InputGroup className="mb-3">
                <Form.Control type='search' name='search' onChange={handleTitleSearch} placeholder='ui/ux design' aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text> <FaSearch></FaSearch> </InputGroup.Text>
            </InputGroup>
            <h2>Filter</h2>
            <div className='d-flex gap-1  mt-3 justify-content-around'>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle style={{ fontSize: '13px' }} id='dropdown-basic' className='px-lg-4 rounded-5 btn-sm px-1'>
                        Years of Experience
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleExperienceChange('1')} href='#/action-1'>
                            1 Year
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleExperienceChange('2')} href='#/action-2'>
                            2 Years
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleExperienceChange('3')} href='#/action-3'>
                            3 Years
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleExperienceChange('4')} href='#/action-4'>
                            4 Years
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleExperienceChange('5')} href='#/action-5'>
                            5 Years
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle style={{ fontSize: '13px' }} id='dropdown-basic' className='px-lg-4 btn-sm rounded-5  px-1'>
                        Ratings
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortByRating('asc')} href='#/action-1'>
                            High Ratings Jobs
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortByRating('desc')} href='#/action-2'>
                            Low Ratings Jobs
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle style={{ fontSize: '13px' }} id='dropdown-basic' className='px-lg-4 rounded-5  btn-sm  px-1'>
                        Location
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {uniqueLocations.map(location => (
                            <Dropdown.Item key={location} onClick={handleLocationChange}>
                                {location}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mb-2'>
                    <Dropdown.Toggle style={{ fontSize: '13px' }} id='dropdown-basic' className='px-lg-4 rounded-5  btn-sm  px-1'>
                        Sort by Time
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSortBy('asc')} href='#/action-1'>
                            Ascending
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSortBy('desc')} href='#/action-2'>
                            Descending
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div>
                <p className='fw-bold'>{jobs.length} Result for UI/UX designer</p>

                <div className=''>
                    {jobs
                        .filter(
                            job =>
                                (searchLocation === '' || job.location === searchLocation) &&
                                (searchTitle === '' || job.title.toLowerCase().includes(searchTitle.toLowerCase())) &&
                                (selectedExperience === '' || job.yearsOfExperience === selectedExperience)
                        )
                        .sort((a, b) => {
                            if (sortBy === 'asc') {
                                return a.time.localeCompare(b.time); // Sort by time in ascending order
                            } else if (sortBy === 'desc') {
                                return b.time.localeCompare(a.time); // Sort by time in descending order
                            }
                            return 0;
                        })
                        .sort((a, b) => {
                            if (sortByRating === 'asc') {
                                return a.ratings - b.ratings; // Sort by ratings in ascending order
                            } else if (sortByRating === 'desc') {
                                return b.ratings - a.ratings; // Sort by ratings in descending order
                            }
                            return 0;
                        })
                        .map(job => (
                            <ShowAllJobs jobs={jobs} job={job} key={job.id} />
                        ))}
                </div>
            </div>
            {/* <div className='text-center'>
                <div>
                    {
                        pagesNumber.map(number => <button key={number}>{number}</button>)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default AllJobs;
