import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, deleteProduct } from '../api/products';
import CenteredSpinner from '../components/CenteredSpinner';
import ConfirmModal from '../components/ConfirmModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((response) => setProduct(response.data))
      .catch(() => setError('Failed to load product details.'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = () => {
    deleteProduct(id)
      .then(() => {
        setShowConfirm(false);
        setMessage('Product deleted successfully.');
        setTimeout(() => navigate('/products'), 2000);
      })
      .catch(() => setMessage('Failed to delete product.'));
  };
  
  if (loading) return <CenteredSpinner />;
  if (error) return <Alert variant="danger">Error: {error}</Alert>;

  return (
    <Row>
        <Col md={5} className="text-center">
            <img src={product.image} alt={product.title} style={{ maxHeight: '350px', maxWidth: '100%' }} />
        </Col>
        <Col md={7}>
            <h2>{product.title}</h2>
            <h5 className="text-muted">Category: {product.category}</h5>
            <p>{product.description}</p>
            <h3>${product.price.toFixed(2)}</h3>

            <div className="d-flex gap-2 mt-3">
                <Button as={Link} to="/products" variant="outline-secondary">Back to Products</Button>
                <Button as={Link} to={`/edit-product/${product.id}`} variant="outline-primary">Edit</Button>
                <Button variant="danger" onClick={() => setShowConfirm(true)}>Delete</Button>
            </div>

            {message && <Alert variant="info" className="mt-3">{message}</Alert>}

            <ConfirmModal
                show={showConfirm}
                title={`Delete product`}
                body={`Are you sure you want to delete "${product.title}"? This action cannot be undone.`}
                onConfirm={handleDelete}
                onCancel={() => setShowConfirm(false)}
            />
        </Col>
    </Row>
  )
}

export default ProductDetails;