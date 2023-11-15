import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Departments from "../Departments/Departments";
import Doctor from "../Doctor/Doctor";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import Service from "../Service/Service";
import SingleService from "../SingleService/SingleService";
import About from "../About/About";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../../Layouts/Main/Main";


const Routers = createBrowserRouter ([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
          {
            path: '/',
            element:<Home></Home>
          },
          {
            path: '/departments/:department', // Add a leading forward slash
            element: <Departments></Departments>,
            loader: ({ params }) => fetch(`/doctor.json`)
          },
          {
            path: 'doctor',
            element:<Doctor></Doctor>
          },
          {
            path: '/doctor/:ID',
            element:<DoctorDetails></DoctorDetails>,
            loader:({params}) => fetch('/doctor.json')
          },
          {
            path: 'service',
            element:<Service></Service>
          },
          {
            path: '/service/:id',
            element:<SingleService></SingleService>,
            loader:({params}) => fetch('/service.json')
          },
          {
            path: 'about',
            element:<About></About>
          },
          {
            path: 'login',
            element:<Login></Login>
          },
          {
            path: 'registration',
            element:<Registration></Registration>
          }

          
        ]
      },
])

export default Routers;