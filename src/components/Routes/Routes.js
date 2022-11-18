import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
import CheckOut from "../CheckOut/CheckOut";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Review from "../Review/Review";


import Services from "../Services/Services";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: 'checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },


        ]
    }
])
export default router;
