import { Button, Card, Carousel, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
// import img from './assets/eau_nature.jpg'
function App() {
  return (
    <div className="App">
     <Navbar  expand="lg" style= {{backgroundColor: 'green'}}>
  <Container>
    <Navbar.Brand href="#home">Nature</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">inspiration</Nav.Link>
        <NavDropdown title="Themes" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="eau_nature.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img-4.linternaute.com/0efC7-fKD0qAHCUcChtSVXT9Ego=/1500x/smart/43f787f117784c3fa9a928194bd91d5e/ccmcms-linternaute/12325430.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/3/b/d3b819bfbd_50156986_relation-humain-nature.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Your request</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Happy to help!
  </Button>
</Form>
<Card>
  <Card.Header style= {{backgroundColor: 'green'}}>Quote of the day</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Look deep into nature, and then you will understand everything better. {' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title">Albert Einstein</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
