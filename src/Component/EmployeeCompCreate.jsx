import React, {useEffect, useState} from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';


const EmployeeCompCreate = () => {

    const  [firstName, setfirstName] = useState('')
    const  [lastName, setlastName] = useState('')
    const  [email, setemail] = useState('')

    const { id } = useParams();


    const [errors, setErrors] = useState(
     {  firstName :"",
        lastName:"",
        email:""
     })

     function validateForm(){
        let valid =true;

        const errorsCopy ={... errors}

        if(firstName.trim()){
            errorsCopy.firstName="";
        }
        else{
            errorsCopy.firstName = "First Name is required";
            valid = false;
        }

         if(lastName.trim()){
            errorsCopy.lastName="";
        }
        else{
            errorsCopy.lastName = "Last Name is required";
            valid = false;
        }

         if(email.trim()){
            errorsCopy.email="";
        }
        else{
            errorsCopy.email = "Email Address is required";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;

     }
    
    const navigator = useNavigate();


    useEffect(() => {
    if(id){
        getEmployee(id).then((response) => {
            setfirstName(response.data.firstName);
            setlastName(response.data.lastName);
            setemail(response.data.email);
        }).catch(error => {
            console.error(error);
        });
    }
}, [id]);


    // const handleFirstName = (e) => setfirstName(e.target.value);
    // const handleLastName  = (e) => setlastName(e.target.value);
    // const handleEmail     = (e) => setemail(e.target.value);

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){
        const employee = {firstName, lastName, email}
        console.log(employee);
        if(id){
            updateEmployee(id,employee).then((response)=>{
                console.log(response.data);
                navigator('/employees')
            }).catch(error =>{
                console.error(error);
            })
        }
        else{
            createEmployee(employee).then((response) => {
            console.log(response.data);

             navigator('/employees')
        }).catch(error =>{
            console.error(error);
        })
        }

        
        }
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-mb-3">
                        {
                            pageTitle()
                        }
                        <div className="card-body">
                            <form action="">
                                <div className="form-group mb-2">
                                    <label className='form-label'>First Name :</label>
                                    <input type='text' placeholder='Enter Employee First Name' 
                                    name='firstName' value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid':''}`} onChange={(e) => setfirstName(e.target.value)}></input>
                                    {errors.firstName && <div className='invalid-feedback'> {errors.firstName}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'>Last Name :</label>
                                    <input type='text' placeholder='Enter Employee Last Name' 
                                    name='lastName' value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid':''}`} onChange={(e) => setlastName(e.target.value)}></input>
                                    {errors.lastName && <div className='invalid-feedback'> {errors.lastName}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className='form-label'>Email :</label>
                                    <input type='email' placeholder='Enter Employee Email Address' 
                                    name='email' value={email}
                                    className={`form-control ${errors.email ? 'is-invalid':''}`} onChange={(e) => setemail(e.target.value)}></input>
                                    {errors.email && <div className='invalid-feedback'> {errors.email}</div>}
                                </div>
                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default EmployeeCompCreate