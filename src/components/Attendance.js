import React , { useState ,useEffect,useRef } from 'react'
import { Container , Button, Form ,Row,Col} from 'react-bootstrap'
import Nav from './Nav'
import '../assets/css/index.css';
import { Link } from 'react-router-dom';

//import firebase from 'firebase';
import { database } from '../firebase';


const Attendance = () => {
    const [count1 , setCount1] = useState('');
    const [count2 , setCount2] = useState('');
    const [count3 , setCount3] = useState('');
    const [todays , setToday] = useState('');

  const [breakfast,setBreakfast] = useState('');
  const [lunch , setLunch] = useState('');
  const [dinner , setDinner] = useState('');

    const datee = useRef();
    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        setToday(today);
        const Dinner  = database.ref(today+' Dinner');
        const Lunch  = database.ref(today+' Lunch');
        const Breakfast  = database.ref(today+' Breakfast');
        setDinner('/attendancedetails/'+today+'/Dinner');
        setLunch('/attendancedetails/'+today+'/Lunch');
        setBreakfast('/attendancedetails/'+today+'/Breakfast');

      Breakfast.on('value', (snapshot) => {
        setCount1(snapshot.numChildren());
      })

      Lunch.on('value', (snapshot) => {
        setCount2(snapshot.numChildren());
      })

      Dinner.on('value', (snapshot) => {
        setCount3(snapshot.numChildren());
      })
    }, [])
    
    function handledate (){
        var tod = datee.current.value;
        var today = tod.substring(8,10)+'-'+tod.substring(5,7)+'-'+tod.substring(0,4);
        setToday(today);
        const Dinner  = database.ref(today+' Dinner');
        const Lunch  = database.ref(today+' Lunch');
        const Breakfast  = database.ref(today+' Breakfast');
        setDinner('/attendancedetails/'+today+'/Dinner');
        setLunch('/attendancedetails/'+today+'/Lunch');
        setBreakfast('/attendancedetails/'+today+'/Breakfast');

      Breakfast.on('value', (snapshot) => {
        setCount1(snapshot.numChildren());
      })

      Lunch.on('value', (snapshot) => {
        setCount2(snapshot.numChildren());
      })

      Dinner.on('value', (snapshot) => {
        setCount3(snapshot.numChildren());
      })
    }

  return (
    <div>
       
        <Container>
            <div className='align'>
                <p className='xyz'><b>Calendar</b></p>
                <h5>Date : {todays}</h5>
                <p>DH- 07 total count :<span className='decor'>920</span></p>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm="10">
                        <Form.Control type="date" placeholder="Password" ref={datee}  onChange={handledate}/>
                        </Col>
                    </Form.Group>
                </Form>
                <div className='flexboxes'>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Breakfast</h5>
                            <p>Attended : { count1 }</p>
                            <Link to={breakfast}><Button variant='info' className="my-3 py-3">View Details</Button></Link>
                        </div>
                    </div>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Lunch</h5>
                            <p>Attended : { count2 }</p>
                            <Link to={lunch}><Button variant='info' className="my-3 py-3">View Details</Button></Link>
                        </div>
                    </div>
                    <div className='innerbox'>
                        <div className='innerflex'>
                            <h5>Dinner</h5>
                            <p>Attended : { count3 }</p>
                            <Link to={dinner}><Button variant='info' className="my-3 py-3">View Details</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Attendance