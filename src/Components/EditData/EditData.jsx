import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { updateRec } from '../../Services/Actions/employeeAction'

const EditData = () => {

    const { employee } = useSelector(state => state.employeeReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [empData, setEmpData] = useState({
        id : '',
        fname : '',
        lname : '',
        email : '',
        role : '',
        add : ''
    })

    const handleEmployeData = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setEmpData({...empData, [name] : value})
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        
        dispatch(updateRec(empData))

        navigate('/view')
    }

    useEffect(() => {
        if (employee) {
            setEmpData(employee);
        }
    }, [employee]);

  return (
    <>
         <Container>
            <h1 className="text-center mb-5 mt-4">EDIT-FORM</h1>
            <form onSubmit={handleUpdate} className="row g-3">
                <div className="col-md-6">
                    <label>First Name : </label>
                    <input type="text" placeholder="Enter You First Name" name='fname' value={empData.fname} onChange={handleEmployeData} className='mt-3 mb-2 form-control' required /><br />
                </div>
                <div className="col-md-6">
                    <label>Last Name : </label>
                    <input type="text" placeholder="Enter You Last Name" name='lname' value={empData.lname} onChange={handleEmployeData} className='mt-3 mb-2 form-control'   /><br />
                </div>
                <div className="col-md-6">
                    <label>Email : </label>
                    <input type="email" placeholder="Enter You Email" name='email' value={empData.email} onChange={handleEmployeData} className='mt-3 mb-2 form-control'   /><br />
                </div>
                <div className="col-md-6">
                    <label>Role : </label>
                    <input type="text" placeholder="Enter You Email" name='role' value={empData.role} onChange={handleEmployeData} className='mt-3 mb-2 form-control'   /><br />
                </div>
                <div className="col-12">
                    <label>Address : </label>
                    <input type="text" placeholder="Enter You Course" name='add' value={empData.add} onChange={handleEmployeData} className='mt-3 mb-2 form-control'   /><br />
                </div>
                <div className="col-12">
                    <button type="submit" className='btn bg-black text-white mt-3'>Submit</button>
                </div>
            </form>
        </Container>
    </>
  )
}
export default EditData
