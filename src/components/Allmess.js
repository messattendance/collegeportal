import React from 'react'
import Nav from './Nav'
import {Button, Container , Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Allmess = () => {
  return (
    <div>
        <Nav/>
        <Container>
        <div className="align">
          <Button variant='info' className='py-3 my-3'>Attendance</Button>
            
        </div>
        <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Dining Hall</th>
                            <th>View Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>DH1</td>
                        <td><Link to="/attendance"><Button variant="info">view attendance</Button></Link></td>
                        </tr>
                        <tr>
                        <td>DH2</td>
                        <td><Link to="/attendance"><Button variant="info">view attendance</Button></Link></td>
                        </tr>
                        <tr>
                        <td>DH3</td>
                        <td><Link to="/attendance"><Button variant="info">view attendance</Button></Link></td>
                        </tr>
                    </tbody>
                    </Table>
        </Container>
        
    </div>
  )
}

export default Allmess