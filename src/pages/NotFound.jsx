import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p className="lead">Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/">
        <Button variant="primary">Go Home</Button>
      </NavLink>
    </div>
  );
}

export default NotFound;