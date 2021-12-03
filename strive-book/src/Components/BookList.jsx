import React from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"

class BookList extends React.Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Row className="text-center">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col sm={6} md={3} className=" ml-3 sm-6 md-3 lg-4 ">
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList
