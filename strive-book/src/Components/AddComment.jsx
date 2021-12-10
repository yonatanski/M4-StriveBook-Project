import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  }

  sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
          },
        }
      )
      if (response.ok) {
        alert("Comment was sent")
      } else {
        console.log("error")
        alert("Something went wrong")
      }
    } catch (error) {
      console.log("error")
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
