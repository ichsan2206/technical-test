import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'


function Product() {
    return (
        <div className='user-container'>
            <Container className='ms-0'>
                <Row>
                        <Col lg={4} md={4} sm={8} xs={12}>
                            <Card className="product-card mb-2">
                                <Card.Img variant="top" src="https://exp.itemku.com/wp-content/uploads/2021/12/yu-zhong-mobile-legends-black-fierce-dragon-hd-1024x576.webp"className='product-image' />
                                <Card.Body>
                                    <Link style={{ textDecoration: 'none' }} as={Link} to="#">
                                        <Card.Title style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>hero</Card.Title>
                                    </Link>
                                    <p className='product-card-text'>Type Hero</p>
                                    <butto className="button-detail">detail</butto>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={8} xs={12}>
                            <Card className="product-card mb-2">
                                <Card.Img variant="top" src="https://exp.itemku.com/wp-content/uploads/2021/12/yu-zhong-mobile-legends-black-fierce-dragon-hd-1024x576.webp"className='product-image' />
                                <Card.Body>
                                    <Link style={{ textDecoration: 'none' }} as={Link} to="#">
                                        <Card.Title style={{ color: 'white', fontSize: '18px', fontWeight: '700' }}>hero</Card.Title>
                                    </Link>
                                    <p className='product-card-text'>Type Hero</p>
                                    <butto className="button-detail">detail</butto>
                                </Card.Body>
                            </Card>
                        </Col>
                  </Row>
            </Container>
        </div>
        // </>
    );
}

export default Product;