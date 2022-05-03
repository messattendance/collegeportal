import React, { useEffect, useState } from 'react'
import { Container ,Button , Table} from 'react-bootstrap'
import '../assets/css/index.css'
import Nav from './Nav'
import firebase from 'firebase'
const Leavemeal = () => {

    const[count, setCount]=useState();
    const [messages, setMessages] = useState('');
    useEffect(() => {
        firebase.firestore().collection('leavemeal').get().then(snap => {
          setCount(snap.size) // will return the collection size
        });

        firebase.firestore()
      .collection('leavemeal')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
      }, [count])

  return (
    <div>
        {/* <Nav/> */}
        <Container>
            <div className='align'>
                <h4  className='font_m my-2'>Leave The Meal</h4>
                <h5>Date : 02/04/2022</h5>
                <p>Total number of students who are willing to leave the  meal  :   <span className='decor'>{count}</span></p>
                <Table responsive="lg">
                    <thead>
                        <tr>
                            <th>ID number</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                    {messages && messages.map((msg =>
                    <tr>
                        <td>{msg.data.idnumber}</td>
                        <td>Not Mentioned</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
            </div>
        </Container>
    </div>
  )
}

export default  Leavemeal
