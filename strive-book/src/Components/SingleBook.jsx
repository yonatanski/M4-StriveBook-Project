import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"

import SciFi from "../data/scifi.json"
import CommentArea from "./CommentArea"

class SingleBook extends React.Component {
  // state = {
  //   selected: false,
  // }

  render() {
    return (
      <>
        {/* <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                  <Card.Title> {this.props.book.title}</Card.Title>
                </Card.Body> */}
        <div className="card ml-2 h-100 p-2 card-img-top " onClick={() => this.props.changeSelectedBook(this.props.book.asin)} style={{ border: this.props.selectedBook === this.props.book.asin ? "3px solid red" : "none" }}>
          <img src={this.props.book.img} alt="" />
          <div className="card-body">
            <h5 className="text-primary">{this.props.book.title}</h5>

            <h5>PRICE:-{this.props.book.price}💲</h5>
          </div>
        </div>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
