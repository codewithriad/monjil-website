import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import About from "../pages/About/About";
import Hero from "../pages/Hero/Hero";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children:[
            {
                path: '/',
                element: <Hero/>,
            },
            {
                path: 'about',
                element: <About/>,
            }
           
        ]
    }
])
