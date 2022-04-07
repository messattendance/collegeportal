import React ,{ useState , useEffect } from 'react'
import { Container ,Button , Table} from 'react-bootstrap'
import '../assets/css/index.css'
import firebase from 'firebase'
import Nav from './Nav'
//import { database  } from '../firebase'

const AttendanceDetails = (props) => {
    const [count , setCount] = useState('');
    const [obj, setObject] = useState('');
    useEffect(() => {
      const Lunch = firebase.database().ref('31-03-2022 Lunch');
      Lunch.on('value' , (snapshot)=>{
          setCount(snapshot.numChildren());
          setObject({
            ...snapshot.val()
        })
      })
    }, [])
    
  return (
    <div>
        <Nav/>
        <Container>
            <div className='align'>
                <Button variant='info' className='py-3 my-3'>Attendance</Button>
                <div className="attendance">
                    <h5 className='px-3'>Total Count : <span className='decor'>{count}</span></h5>
                    <h5  className='px-3 text-danger'>Breakfast</h5>
                    <h5 className='px-3'>Date : 02/04/2022</h5>
                </div>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>Attendees</th>
                            <th>Arrival Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(obj).map(id =>{
                            return<tr>
                                <td>{obj[id].name}</td>
                                <td>{obj[id].exit_time}</td>
                            </tr>
                        })}
                        
                     
                    </tbody>
                    </Table>
            </div>
        </Container>
    </div>
  )
}

export default AttendanceDetails