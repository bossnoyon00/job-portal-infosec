import {
    createBrowserRouter
} from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/Main";
import AllJobs from "../pages/AllJobs/AllJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import ReferJob from "../pages/ReferJob/ReferJob";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import AddCandidate from "../AddCandidate/AddCandidate";
import ShowAllJobs from "../pages/AllJobs/ShowAllJobs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allJobs',
                element: <AllJobs></AllJobs>,
            },
            {
                path: '/addCandidate',
                element: <AddCandidate></AddCandidate>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <JobDetails></JobDetails>,
                loader: () => fetch('/alljobs.json')
            },
            {
                path: '/details/:id',
                element: <ShowAllJobs></ShowAllJobs>,
                loader: () => fetch('/alljobs.json')
            },
            {
                path: '/refer/:id',
                element: <ReferJob></ReferJob>,
                loader: () => fetch('/alljobs.json')
            }
        ],

    },









]);