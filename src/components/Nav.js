import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div> 
        <div className='navbar'>
            <h3 className='link'><Link to="/">Mess Attendance System</Link></h3>
            <Button variant="info" className='navbutton'>Logout</Button>
        </div>
        <div className="head">
          <h2>College Administration</h2>
        </div>
    </div>
    
  )
}

export default Nav