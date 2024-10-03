import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { FaEye } from 'react-icons/fa'

export default function App() {
    const [products, setProducts] = useState([])
    const [preview, setPreview] = useState(false)
    const [activeProduct, setActiveProduct] = useState(null)
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products)
        })
    }, [])

    const handlePreview = (data) => {
        setActiveProduct(data)
        setPreview(true)
    }
    return (
        <Container>
            <div className="jumbotron py-5">
                <h1 className="display-4">My Cart.com!</h1>
            </div>
            <Row className='pt-4'>
                {
                    products.length === 0 ?
                        'Fetching...'
                        :
                        products.map(item => (
                            <Col md={6} lg={3} className='pb-4' key={item.id}>
                                <Card style={{ minHeight: 370 }}>
                                    <Card.Img variant="top" src={item.thumbnail} height={180} className='object-fit-contain' />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description.substring(0, 50)}...</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="lead fw-bold">${item.price}</div>
                                            <Button variant="dark" className='px-5'>Buy</Button>
                                            <Button onClick={() => handlePreview(item)} variant="light"><FaEye /></Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                }
            </Row>
            <Modal show={preview} onHide={() => setPreview(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Quick view</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        activeProduct ?
                            <Card style={{ minHeight: 370 }}>
                                <Card.Img variant="top" src={activeProduct.thumbnail} height={180} className='object-fit-contain' />
                                <Card.Body>
                                    <Card.Title>{activeProduct.title}</Card.Title>
                                    <Card.Text>{activeProduct.description}  </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="lead fw-bold">${activeProduct.price}</div>
                                        <Button variant="dark" className='px-5'>Buy</Button>
                                        <Button onClick={() => handlePreview(activeProduct)} variant="light"><FaEye /></Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                            : null
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}
