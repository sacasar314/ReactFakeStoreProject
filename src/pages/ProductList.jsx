import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CenteredSpinner from '../components/CenteredSpinner';
import { getProducts } from '../api/products';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((err) => setError('Fail to load products.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CenteredSpinner />;
  if (error) return <Alert variant="danger">Error: {error}</Alert>;

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
                <Col key={product.id}>
                    <Card className="h-100 shadow-sm">
                        <div style={{ height: 200, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Img src={product.image} style={{ maxHeight: '200px', width: 'auto' }} />
                        </div>
                        <Card.Body className="d-flex flex-column">
                            <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
                            <Card.Text className="mt-auto fw-bold">${product.price.toFixed(2)}</Card.Text>
                            <Button as={NavLink} to={`/products/${product.id}`} variant="outline-primary">
                                View Details
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ProductList;
