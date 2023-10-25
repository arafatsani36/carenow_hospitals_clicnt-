import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Departments = () => {
    //  const {departments} = useLoaderData();
    // console.log(department)
    //  let {Department} = useParams();
    
    // const[departments, setDepartments] = useState({});

    //  let {_id} = useParams();
  
    // const[toys, setToys] = useState({});
  
    //  useEffect(() => {
    //    if(department){
    //     const filteredDoctors = department.filter((doctor) => doctor.department === Department);
    //     //  const toysData = singleToy.find(td => td._id === _id);
    //     setDepartments(filteredDoctors);
    //    }
    //  })


    let { data, department } = useParams();
    console.log('Data:', data);
    console.log('Department:', department);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        // Filter the data based on the department parameter
        const filteredData = departments.filter(doctor => doctor.departments === department);
        setFilteredDoctors(filteredData);
      });

      console.log(filteredDoctors)



    return (
        <div>
            <h2>{}</h2>
        </div>
    );
};

export default Departments;