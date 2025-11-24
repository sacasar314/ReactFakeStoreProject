import { Routes, Route } from 'react-router-dom'
import AppNav from './components/AppNav'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import NotFound from './pages/NotFound'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <AppNav />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
