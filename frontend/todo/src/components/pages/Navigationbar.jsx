import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Todo's</Navbar.Brand>
          <Nav className="m-auto">
            <Link to="/" className="nav-link">
              All todo
            </Link>
            <Link to="/add" className="nav-link">
              Add
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
