import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/Home/Homepage';
import About from './Pages/About/Aboutpage';
import Resume from './Pages/Resume/Resume';
import Blogs from './Pages/Blogs/BlogsPage';
import Contact from './Pages/Contact/Contactpage';
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/Resume",
                element:<Resume/>
            },
            {
                path: "/Blogs",
                element: <Blogs />
            },
            {
                path: "/Contact",
                element: <Contact/>
            }

        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
