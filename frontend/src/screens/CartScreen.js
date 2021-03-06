import React, {useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({match}) => {
  let params = useParams();
  let location = useLocation();

  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) =>state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    } 
  }, [dispatch, productId, qty])

  const removeFromCartHandler = () =>{
    console.log('Remove');
  }
  return (
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>

          {cartItems.length === 0 
          ? <h1>Your cart is empty <Link to='/'>Go Back</Link></h1>
          : <ListGroup variant='flush'>
            {cartItems.map(item => 
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded/>
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                  <Form.Select as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} >
                      {
                      [...Array(item.countInStock).keys()].map((z) => (
                      <option key={z + 1} value={z + 1}>{z + 1}</option>
                      ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
              )}
            </ListGroup>}
        </Col>
        <Col md={2}>
          
        </Col>
        <Col md={2}>
          
        </Col>
      </Row>
  )
}

export default CartScreen