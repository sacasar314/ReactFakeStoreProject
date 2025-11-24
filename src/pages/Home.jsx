import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to the FakeStore App!</h1>
      <p className="lead">
        Explore our wide range of products and enjoy a seamless shopping experience.
      </p>
      <NavLink to="/products">
        <Button variant="primary" size="lg">
          View Products
        </Button>
      </NavLink>
      <Alert variant="info" className="mt-4">
        Note: This is a demo application using the FakeStore API.
      </Alert>
    </div>
  )
}

export default Home;