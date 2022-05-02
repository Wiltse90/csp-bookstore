import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useNavigate, useLocation } from "react-router-dom";

const RegisterScreen = () => {

  const history = useNavigate()
  const location = useLocation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector( state => state.userRegister)
  const userLogin = useSelector( state => state.userLogin)
  const {loading, error, userInfo} = userRegister

  const redirect = location.pathname ? location.pathname : '/'
  
  useEffect(() => {
    if(userLogin.userInfo){
      history('/')
    }
  }, [history, userRegister.userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name,email,password))
  }
  
  return (
    <FormContainer>
      <h1>Register</h1>
      {error && console.log("Error")}
      {loading && console.log("Loading")}
      <Form onSubmit={submitHandler} method="POST">
      <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
        Register
      </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '} <Link to={'/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen