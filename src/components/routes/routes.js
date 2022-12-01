import { createBrowserRouter } from "react-router-dom";
import Attadents from "../Attandents/Attadents";
import LogIn from "../Login/LogIn";
import Layout from "../Register/Layout/Layout";
// import Register from "../Register/Register";
// import SecondRegister from "../Register/SecondRegister";

export const router=createBrowserRouter([
{
    path:'/',
    element:<Layout></Layout>


},
{
    path:'/login',
    element:<LogIn></LogIn>
},
{
    path:'/attandents',
    element:<Attadents></Attadents>
}


]);