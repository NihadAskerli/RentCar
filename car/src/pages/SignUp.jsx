import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signUp'>
        <Row className='m-0'>
            <Col sm={12} md={5} className='p-0'>
                <div className="img"></div>
            </Col>
            <Col sm={12} md={7}>
                <div className="text d-flex flex-column justify-content-center align-items-center">
                    <div className="top text-center">
                      <h1>YellowGo</h1>
                      <h3>Start Your Journey Here</h3>
                      <p>Experience the Freedom of Renting</p>
                    </div>
                    <div className="bottom d-flex flex-column justify-content-center align-items-center">
                     <div className="inputs d-flex flex-column">
                     <input type="email" placeholder='Email address'/>
                      <input type="password" placeholder='Password'/>
                      <input type="password" placeholder='Re-type Password'/>
                     </div>
                      <Button>Sign Up</Button>
                      <p>or sign up with</p>
                      <div className="box d-flex justify-content-center align-items-center">
                      <Button>Google</Button>
                      <Button>Facebook</Button>
                      </div>
                      <p>Already have an account? <LinkContainer to='/login'><NavLink>Log in</NavLink></LinkContainer></p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default SignUp