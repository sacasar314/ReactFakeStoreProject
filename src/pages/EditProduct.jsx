import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../api/products';
import CenteredSpinner from '../components/CenteredSpinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((response) => setForm(response.data))
      .catch(() => setError('Failed to load product details.'));
  }, [id]);

  if (!form) return <CenteredSpinner />;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, price: parseFloat(form.price) };

    updateProduct(id, payload)
      .then(() => {
        setMessage('Product updated successfully.');
        setTimeout(() => navigate(`/products/${id}`), 2000);
      })
      .catch(() => setError('Failed to update product.'));
  };

  return (
    <>
        <h2>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Product Title</Form.Label>
                <Form.Control type="text" name="title" value={form.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" step="0.01" name="price" value={form.price} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" value={form.description} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" name="category" value={form.category} onChange={handleChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">Update Product</Button>
            <Button variant="secondary" className="ms-2" onClick={() => navigate(`/products/${id}`)}>Cancel</Button>
        </Form>

        {message && <Alert variant="success" className="mt-3">{message}</Alert>}
        {error && <Alert variant="danger" className="mt-3">Error: {error}</Alert>}
    </>
  );
}

export default EditProduct;