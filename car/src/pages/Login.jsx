import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <Row className='m-0'>
            <Col sm={12} md={5} className='p-0'>
                <div className="img"></div>
            </Col>
            <Col sm={12} md={7}>
                <div className="text d-flex flex-column justify-content-center align-items-center">
                    <div className="top text-center">
                      <h1>YellowGo</h1>
                      <div className="topText2 d-flex flex-column">
                        <h3>Your Rental, Your Journey</h3>
                        <p>Welcome, please log in to your account.</p>
                      </div>
                    </div>
                    <div className="bottom d-flex flex-column justify-content-center align-items-center">
                     <div className="inputs d-flex flex-column">
                     <input type="email" placeholder='Email address'/>
                      <input type="password" placeholder='Password'/>
                      <p className='text-end'>Forgot password?</p>
                     </div>
                      <Button>Log in</Button>
                      <p>Dont have an account? <LinkContainer to='/'><NavLink>Sign Up</NavLink></LinkContainer></p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Login