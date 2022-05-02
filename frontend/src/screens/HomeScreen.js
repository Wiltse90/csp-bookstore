import React, { useState, useEffect} from 'react'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'


const HomeScreen = () => {

  const [ products, setProducts] = useState([])

  /*
  axios.get('/api/product').then(response => {
    setProducts(response.data)
  })*/
  

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/product')
      setProducts(data)
    }

    fetchProducts() },[])

    if(products){
  return (
      <div>
          <h1>Latest Products</h1>
          <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
              ))}
          </Row>
      </div>
  )
              }
}

export default HomeScreen