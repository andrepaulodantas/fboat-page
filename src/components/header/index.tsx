import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";

export default function header() {
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Toggle
            aria-controls="nabarScroll"
            data-bs-target="#navbarScroll"
          />
          <Navbar.Collapse id="nabarScroll">
            <Nav>
              <NavLink eventKey="0" as={Link} to="/">
                Home
              </NavLink>
              <NavLink eventKey="1" as={Link} to="/about">
                About
              </NavLink>
              <NavLink eventKey="2" as={Link} to="/publications">
                Publications
              </NavLink>
              <NavLink eventKey="3" as={Link} to="/Card">
                Card
              </NavLink>
            </Nav>
            <Nav>
             <NavLink eventKey="4" as={Link} to="/contact">
                Contact
              </NavLink>
              <Nav.Link eventKey={5} href="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
