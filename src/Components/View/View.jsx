import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRec, singleRec } from '../../Services/Actions/employeeAction'
import { useNavigate } from 'react-router'
// import Dropdown from 'react-bootstrap/Dropdown'
import img from '../../assets/1.avif'

const View = () =>{

    const { employees, isLoading } = useSelector(state => state.employeeReducer)
    const navigate = useNavigate()

    console.log("DATAAA",employees);
    
    const dispatch = useDispatch()

    const handleEdit = (id) => {
        console.log("Edit");
        
        dispatch(singleRec(id))

        navigate('/edit')
    }

    const handleDelete = (id) => {
        console.log("Delete");

        dispatch(deleteRec(id))
    }

    

    // useEffect(() => {
    //     dispatch(employeeAdd())
    // }, [])

  return (
    <>
        <Container>
            <h1 className='text-center mb-5 mt-4 fw-semibold'>VIEW-DATA</h1>
            
            {/* table */}
            {/* Loading */}
            
            {
                isLoading ? (
                    <h1 className='texte-center'>LOding.....</h1>
                ) :
                    employees.length === 0 ? (
                        <div className="no-data-container text-center">
                            <img src={img} alt="No data available" className='w-50 h-50 mb-5'/>
                        </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">First-Name</th>
                            <th scope="col">Last-Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Address</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((rec, index) =>{
                                    return(
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{rec.fname}</td>
                                            <td>{rec.lname}</td>
                                            <td>{rec.email}</td>
                                            <td>{rec.role}</td>
                                            <td>{rec.add}</td>
                                            <td><button className='me-3 btn' onClick={() => handleEdit(rec.id)} style={{backgroundColor: 'black'}}><i className="fa-solid fa-pen-nib text-white"></i></button>
                                            <button className='btn' onClick={() => handleDelete(rec.id)}  style={{backgroundColor: 'black'}}><i className="fa-solid fa-trash-can text-white"></i></button></td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        </Container>
    </>
  )
}

export default View
