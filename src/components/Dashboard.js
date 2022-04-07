import React from 'react'
import Nav from './Nav';
import { Container ,Button } from 'react-bootstrap';
import '../assets/css/index.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <Nav/>
      <Container>
          <div className='align'>
            <Link to="/allmess"><Button variant='info' className='my-3 py-3  btns'>Attendance</Button></Link>
            <Link to="/feedback"><Button variant='info' className='my-3 py-3  btns'>Feedback</Button></Link>
            <Link to="/complaints"><Button variant='info' className='my-3 py-3  btns'>Complaints</Button></Link>
          </div>
      </Container>
    </div>
  )
}

export default Dashboard