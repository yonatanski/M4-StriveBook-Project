import bookdata from "../data/scifi.json"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const LatestRelease = () => {
  return (
    <Container>
      <h1>LatestRelease</h1>
      <Row>
        {bookdata.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mt-3">
            <Card className="card-img-top">
              <Card.Img variant="top" src={book.img} className=" img-fluid  cardimg object-fit-cover" />
              <Card.Body href="#home">
                <Card.Title>
                  <small>{book.title}</small>
                </Card.Title>
                <Card.Text> Price {book.price}</Card.Text>
                <p></p>
                <Button variant="primary">Buy Now !!</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default LatestRelease
