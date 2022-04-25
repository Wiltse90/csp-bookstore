import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../prod'

const ProductScreen = ({match, local}) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    let params = useParams();
    const product = products.find((p) => p._id == params.id)

    const addToCartHandler = () => {
 
        navigate(`/cart/${params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link className='btn btn-dark my-3' to='/'>Back</Link>
            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Author: {product.brand}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                <Col>Qty:</Col>
                                <Col>
                                <Form.Select as='select' value={qty} onChange={(e) => 
                                setQty(e.target.value)} >

                                    {
                                    [...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </Form.Select>
                                </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item>
                            <Button
                             onClick={addToCartHandler}
                             className='btn-block ' 
                             type='button' 
                             disabled={product.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default ProductScreen

