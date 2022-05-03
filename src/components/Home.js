import React from 'react'
import { Tabs,Tab, Nav, Col, Row, Container, Stack } from 'react-bootstrap'
import {TabContainer, TabPane , TabContent} from 'react-bootstrap'
import { useState } from 'react'
import Attendance from './Attendance'
import Feedback from './Feedback'
import Complaints from './Complaints'

import Navv from './Nav'
import'../assets/css/assets.css'
const Home = () => {
    
  return (
  <div className='contact-background-image'>
       
       <Navv/>
       <Tab.Container id="" defaultActiveKey="first" className="mt-20" >

        <Col>
        <Nav variant="pills" className="flex-column">
        <Row xs lg={6} className='justify-content-center'>
          <Nav.Item >
          <div className='bg-light text-center font_m rounded' >
              <Nav.Link eventKey="first">Attendance</Nav.Link>
           </div>            
          </Nav.Item >

          <Nav.Item  >

          <div className='bg-light text-center font_m rounded' >
          <Nav.Link eventKey="third">Feedback</Nav.Link>
          </div>
          </Nav.Item>
          <Nav.Item >
          <div className='bg-light text-center font_m rounded' >
          <Nav.Link eventKey="fourth">Complaints</Nav.Link>
          </div>
          </Nav.Item>
          
          </Row>
        </Nav>
        
      <Row sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
             <div className='container bg-light'><Attendance/></div>
          </Tab.Pane>
         
          <Tab.Pane eventKey="third">
          <div className='container bg-light'><Feedback/></div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
          <div className='container bg-light'><Complaints/></div>
          </Tab.Pane>
          
        </Tab.Content>
      </Row>
    </Col>
  </Tab.Container>
   </div>
    
  )
}

export default Home