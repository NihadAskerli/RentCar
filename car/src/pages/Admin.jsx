import React from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const Admin = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Company name is a required field"),
        email: yup.string().email().required(),
        tel: yup.number().required("Phone number is a required field"),
        password: yup.string().min(8).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Passwords Don't Match").required()
    })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema),
    });
    
      const onSubmit = (data) =>{
        console.log(data);
      }
  return (
    <div className='admin'>
    <Row className='m-0'>
        <Col sm={12} md={5} className='p-0'>
            <div className="img"></div>
        </Col>
        <Col sm={12} md={7}>
            <div className="text d-flex flex-column justify-content-center align-items-center">
                <div className="top text-center">
                  <h1>YellowGo</h1>
                  <div className="topText2">
                     <h3>Start Your Journey Here</h3>
                     <p>Experience the Freedom of Renting</p>
                  </div>
                </div>
                <div className="bottom d-flex flex-column justify-content-center align-items-center">
                <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs d-flex flex-column">
                <input type="text" placeholder='Company Name' {...register('name')}/>
                {errors.name && <p>{errors.name?.message}</p>}
                 <input type="email" placeholder='Email address' {...register('email')}/>
                 {errors.email && <p>{errors.email?.message}</p>}
                 <input type="tel" placeholder='+994' {...register('tel')}/>
                 {errors.tel && <p>{errors.tel?.message}</p>}
                  <input type="password" placeholder='Password' {...register('password')}/>
                  {errors.password && <p>{errors.password?.message}</p>}
                  <input type="password" placeholder='Re-type Password' {...register('confirmPassword')}/>
                  {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
                 </div>
                  <Button type='submit'>Sign Up</Button>
                </Form>
                  <p>Already have an account? <LinkContainer to='/'><NavLink>Log in</NavLink></LinkContainer></p>
                </div>
            </div>
        </Col>
    </Row>
</div>
  )
}

export default Admin