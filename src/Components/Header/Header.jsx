import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { roleRec } from '../../Services/Actions/employeeAction'

const Header = () => {

    const dispatch = useDispatch();

    const handleRole = (category) => {
        console.log("Role");

        dispatch(roleRec(category));
    }

  return (
    <>
        <div className='bg-black p-3'>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h1 className='text-white'>EmPloyEE dAtA</h1>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Link to={'/'} className='text-center text-white me-4 text-decoration-none fw-medium'>FORM</Link>
                        <Link to={'/view'} className='text-center text-white me-4 text-decoration-none fw-medium'>VIEW</Link>
                        {/* dropdown */}
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='text-white p-0 border-0 fw-medium'>
                                ROLE
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('')}>All</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('admin')}>Admin</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('user')}>User</Dropdown.ItemText>
                                <Dropdown.ItemText className="dropdown-item-text" onClick={() => handleRole('other')}>Other</Dropdown.ItemText>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Header
