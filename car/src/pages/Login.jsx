import React from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'



const Login = () => {

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required()
})

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: yupResolver(schema),
});

  const onSubmit = (data) =>{
    console.log(data);
  }

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
                     <Form onSubmit={handleSubmit(onSubmit)}>
                     <div className="inputs d-flex flex-column">
                     <input type="email" placeholder='Email address' {...register('email')}/>
                     {errors.email && <p className='txt'>{errors.email?.message}</p>}
                      <input type="password" placeholder='Password' {...register('password')}/>
                      {errors.password && <p className='txt'>{errors.password?.message}</p>}
                      <p className='text-end'>Forgot password?</p>
                     </div>

                      <Button type='submit'>Log in</Button>
                     </Form>

               

                      <p>Dont have an account? <LinkContainer to='/'><NavLink>Sign Up</NavLink></LinkContainer></p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Login