import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { empAddData, thunk } from "../../Services/Actions/employeeAction";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const AddData = () => {

    const [empData, setEmpData] = useState({
        id : '',
        fname : '',
        lname : '',
        email : '',
        role : '',
        add : ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEmployeData = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setEmpData({...empData, [name] : value})
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
    
        dispatch(thunk(empData));

        setEmpData({
            id : '',
            fname : '',
            lname : '',
            email : '',
            role : '',
            add : ''
        })

        navigate('/view');
    }

    return (
        <>
            <Container>
                <h1 className="text-center mb-5 mt-4 fw-semibold">ADD-DATA</h1>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label>First Name : </label>
                        <input type="text" placeholder="Enter You First Name" name='fname' value={empData.fname} onChange={handleEmployeData} className='mt-3 mb-2 form-control'  required /><br />
                    </div>
                    <div className="col-md-6">
                        <label>Last Name : </label>
                        <input type="text" placeholder="Enter You Last Name" name='lname' value={empData.lname} onChange={handleEmployeData} className='mt-3 mb-2 form-control' required /><br />
                    </div>
                    <div className="col-md-6">
                        <label>Email : </label>
                        <input type="email" placeholder="Enter You Email" name='email' value={empData.email} onChange={handleEmployeData} className='mt-3 mb-2 form-control' required /><br />
                    </div>
                    <div className="col-md-6">
                        <label>Role : </label>
                        <input type="text" placeholder="Enter You Email" name='role' value={empData.role} onChange={handleEmployeData} className='mt-3 mb-2 form-control'  required /><br />
                    </div>
                    <div className="col-12">
                        <label>Address : </label>
                        <input type="text" placeholder="Enter You Course" name='add' value={empData.add} onChange={handleEmployeData} className='mt-3 mb-2 form-control' required /><br />
                    </div>
                    <div className="col-12">
                        <button type="submit" className='btn bg-black text-white mt-3'>Submit</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default AddData;