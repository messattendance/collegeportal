import React , {useEffect,useState} from 'react'
import Nav from './Nav'
import {Button, Container,Table} from 'react-bootstrap'

import firebase from 'firebase';



const Feedback = () => {
  const [count, setCount] = useState('');
  const [messages, setMessages] = useState('');
  useEffect(() => {
    firebase.firestore().collection('feedback').get().then(snap => {
      setCount(snap.size) // will return the collection size
    });
    firebase.firestore()
      .collection('feedback')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  
  }, [count])
  
  return (
    <div>
        <Nav/>
        <Container>
        <div className="align">
          <Button variant='info' className='py-3 my-3'>Feedback</Button>
            <div className="feedback">
              <h5 className='px-3'>Satisfactory</h5>
              <h5 className='px-3'>Below Satisfactory</h5>
              <h5 className='px-3'>Good</h5>
            </div>
          <h5>Total feedback Count :  <span className='decor'>{count}</span></h5>
        </div>
        {/*<div className='attendance'>
        <Button variant="info" className="my-3">View More</Button>
        <Button variant="info" className="my-3">View More</Button>
        <Button variant="info" className="my-3">View More</Button>
  </div>*/}
  <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>ID number</th>
                            <th>Q1</th>
                            <th>Q2</th>
                            <th>Q3</th>
                            <th>Q4</th>
                        </tr>
                    </thead>
                    <tbody>
                    {messages && messages.map((msg =>
                        <tr>
                        <td>{msg.data.idnumber}</td>
                        <td>{msg.data.q1}</td>
                        <td>{msg.data.q2}</td>
                        <td>{msg.data.q3}</td>
                        <td>{msg.data.q4}</td>
                        </tr>
                       ))}
                    </tbody>
                    </Table>
        </Container>
        
    </div>
  )
}

export default Feedback