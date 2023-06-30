import React from 'react'
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Profile from "./components/Profile";
import UploadImage from './components/UploadImage';

const AddCar = () => {
  return (
    <div className="add">
    <Row className="m-0">
      <Col sm={12} md={2}>
        <div className="box d-flex flex-column align-items-center justify-content-between h-100 py-5">
          <div className="top d-flex flex-column  justify-content-between">
            <h1>YellowGO</h1>
            <ul>
              <li>Dashboard</li>
              <li>Assets</li>
              <LinkContainer to='/add'><li>Add a car</li></LinkContainer>
            </ul>
          </div>
          <div className="bottom d-flex flex-column">
            <Button className="settings">Settings</Button>
            <LinkContainer to="/"><Button className="logOut">Log Out</Button></LinkContainer>
          </div>
        </div>
      </Col>
      <Col sm={12} md={10} className="right">
       <div className="box py-5">
          <div className="header d-flex justify-content-between">
              <div className="left">
                <LinkContainer to='/dashboard'><Button>Back</Button></LinkContainer>
              </div>
              <div className="right d-flex">
                <div className="notice">
                  <i className="fa-regular fa-bell"></i>
                </div>
                <div className="profile">
                    <Profile/>
                </div>
              </div>
          </div>
          <div className="main">
            <div className="top">
              <h1>Add a Car</h1>
              <p>Here's you can add your cars</p>
            </div>
            <div className="bottom">
              <Row className='m-0'>
                <Col sm={12} md={6}><input type="text" placeholder='Car name'/></Col>
                <Col sm={12} md={6}><input type="text" placeholder='Car type'/></Col>
              </Row>
              <Row className='m-0 py-3'>
                <Col sm={12} md={4}> <UploadImage/></Col>
                <Col sm={12} md={4}> <UploadImage/></Col>
                <Col sm={12} md={4}> <UploadImage/></Col>
              </Row>
              <Row className='m-0'>
                <Col sm={12} md={6}><input type="number" placeholder='Production years'/></Col>
                <Col sm={12} md={6}><input type="number" placeholder='Seats'/></Col>
              </Row>
              <Row className='m-0 py-3'>
                <Col sm={12} md={6}><input type="number" placeholder='km/h'/></Col>
                <Col sm={12} md={6}><input type="number" placeholder='Price $'/></Col>
              </Row>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
       </div>
      </Col>
    </Row>
  </div>
  )
}

export default AddCar