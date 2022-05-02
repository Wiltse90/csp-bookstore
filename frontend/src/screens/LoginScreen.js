import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useNavigate, useLocation } from "react-router-dom";

const LoginScreen = () => {

  const history = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  //console.log(email)
  const dispatch = useDispatch()

  const userLogin = useSelector( state => state.userLogin)
  const {loading, error, userInfo} = userLogin

  const redirect = location.pathname ? location.pathname : '/'
  
  useEffect(() => {
    if(userLogin.userInfo){
      history('/')
    }
  }, [history, userLogin, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    
  }
  
  return (
    <FormContainer>
      <h1>Login</h1>
      {error && console.log("Error")}
      {loading && console.log("Loading")}
      <Form onSubmit={submitHandler} method="POST">
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
        Login
      </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '} <Link to={'/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen