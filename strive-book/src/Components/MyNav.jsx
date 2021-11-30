import { Navbar, Nav } from "react-bootstrap"

const MyNav = (props) => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
    </Navbar>
  )
}
export default MyNav
