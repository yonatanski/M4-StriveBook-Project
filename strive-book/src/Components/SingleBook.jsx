import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"

import SciFi from "../data/scifi.json"

class SingleBook extends React.Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        {/* <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                  <Card.Title> {this.props.book.title}</Card.Title>
                </Card.Body> */}
        <div
          className="card ml-2 p-2 "
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <img src={this.props.book.img} alt="" />
          <div className="card-body">
            <h2>{this.props.book.title}</h2>

            <h5>{this.props.author}</h5>
          </div>
        </div>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    )
  }
}

export default SingleBook
