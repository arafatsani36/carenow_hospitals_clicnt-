import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../Home/Home/Home";
import Departments from "../Departments/Departments";
import Doctor from "../Doctor/Doctor";
import DoctorDetails from "../DoctorDetails/DoctorDetails";


const Routers = createBrowserRouter ([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path: '/',
            element:<Home></Home>
          },
          {
            path: '/departments/:department', // Add a leading forward slash
            element: <Departments></Departments>,
            loader: ({ params }) =>
            fetch(`/doctor.json`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data); // Log the data
                return {
                  data,
                  department: params.department
                }
              })  
          },
          {
            path: 'doctor',
            element:<Doctor></Doctor>
          },
          {
            path: '/doctor/:ID',
            element:<DoctorDetails></DoctorDetails>,
            loader:({params}) => fetch('/doctor.json')
          }
          
        ]
      },
])

export default Routers;