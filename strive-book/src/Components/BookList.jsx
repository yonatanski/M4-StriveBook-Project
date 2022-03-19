import React from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"
import CommentArea from "./CommentArea"

class BookList extends React.Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search here" value={this.state.searchQuery} onChange={(e) => this.setState({ searchQuery: e.target.value })} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="text-center">
                {this.props.books
                  .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                  .map((b) => (
                    <Col sm={6} md={3} key={b.asin} className="my-2">
                      <SingleBook
                        book={b}
                        selectedBook={this.state.selectedBook}
                        changeSelectedBook={(asin) =>
                          this.setState({
                            selectedBook: asin,
                          })
                        }
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col md={4}>
              <div class="sticky-top">
                <CommentArea asin={this.state.selectedBook} />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList
