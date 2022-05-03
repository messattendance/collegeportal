import React , {useEffect,useState} from 'react'
import Nav from './Nav'
import {Button, Container,Table} from 'react-bootstrap'

import firebase from 'firebase';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const Feedback = () => {

  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow',
          'green',
          'purple'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue',
      'green',
      'purple'
  ], 
});

const [data1, setData1] = useState({
  datasets: [{
      data: [10, 20, 30],
      backgroundColor:[
        'red',
        'blue',
        'yellow',
        'green',
        'purple'
      ]
  },
],
labels: [
    'Red',
    'Yellow',
    'Blue',
    'green',
    'purple'
], 
});

const [data2, setData2] = useState({
  datasets: [{
      data: [10, 20, 30],
      backgroundColor:[
        'red',
        'blue',
        'yellow',
        'green',
        'purple'
      ]
  },
],
labels: [
    'Red',
    'Yellow',
    'Blue',
    'green',
    'purple'
], 
});


const [data3, setData3] = useState({
  datasets: [{
      data: [10, 20, 30],
      backgroundColor:[
        'red',
        'blue',
        'yellow',
        'green',
        'purple'
      ],
      label:"hello"
  },
],
labels: [
    'Red',
    'Yellow',
    'Blue',
    'green',
    'purple'
], 
});

  const [count, setCount] = useState('');
  const [messages, setMessages] = useState('');
  const q1 = [];
  const q2 = [];
  const q3 = [];
  const q4 = [];
  const cq1 = [];
  const cq2 = [];
  const cq3 = [];
  const cq4 = [];
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
  
  }, [])

  useEffect(() => {

      if(messages){
        messages.forEach((doc) => {
          q1.push(doc.data.q1);
          q2.push(doc.data.q2);
          q3.push(doc.data.q3);
          q4.push(doc.data.q4);
        })
      }
      const count = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0  };
      const count1 = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0  };
      const count2 = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0  };
      const count3 = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0  };
      for (const element of q1) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
      }
  
      for (const element of q2) {
        if (count1[element]) {
          count1[element] += 1;
        } else {
          count1[element] = 1;
        }
      }
  
      for (const element of q3) {
        if (count2[element]) {
          count2[element] += 1;
        } else {
          count2[element] = 1;
        }
      }
  
      for (const element of q4) {
        if (count3[element]) {
          count3[element] += 1;
        } else {
          count3[element] = 1;
        }
      }
      
    cq1.push(count['0'],count['1'],count['2'],count['3'],count['4'],count['5'])
    cq2.push(count1['0'],count1['1'],count1['2'],count1['3'],count1['4'],count1['5'])
    cq3.push(count2['0'],count2['1'],count2['2'],count2['3'],count2['4'],count2['5'])
    
    cq4.push(count3['0'],count3['1'],count3['2'],count3['3'],count3['4'],count3['5'])
    
        setData(
          {
            datasets: [{
                data:cq1,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'green',
                  'purple',
                  'violet'
                ]
            },
          ],
          labels:[0,1,2,3,4,5], 
        }
        )
        setData1(
          {
            datasets: [{
                data:cq2,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'green',
                  'purple',
                  'violet'
                ]
            },
          ],
          labels:[0,1,2,3,4,5], 
        }
        )
  
        setData2(
          {
            datasets: [{
                data:cq3,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'green',
                  'purple',
                  'violet'
                ]
            },
          ],
          labels:[0,1,2,3,4,5], 
          title:'hello'
        }
        )
  
        setData3(
          {
            datasets: [{
                data:cq4,
                label:"hello",
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'green',
                  'purple',
                  'violet'
                ]
            },
          ],
          labels:[0,1,2,3,4,5], 
        }
        )
  
      
  }, [messages])
  
  
  return (
    <div>
       
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

        <div className='attendance'>
          <div style={{width : "30%" , height :"30%"}}>
            <Doughnut data={data}/>
          </div>

          <div style={{width : "30%" , height :"30%"}}>
            <Doughnut data={data1}/>
          </div>

          <div style={{width : "30%" , height :"30%"}}>
           <Doughnut data={data2}/>
          </div>
          <div style={{width : "30%" , height :"30%"}}>
            <Doughnut data={data3}/>
          </div>
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