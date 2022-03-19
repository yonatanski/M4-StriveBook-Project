import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: null,
    },
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      })
    }
  }

  sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2NDcwNzcwODgsImV4cCI6MTY0ODI4NjY4OH0._G5MVtShZZlAuU1aWMtFyGlOQiq7uPBY0cFw6b9eBFE",
        },
      })
      if (response.ok) {
        alert("Comment was sent")
        this.setState({ comment: { comment: "", rate: 1 } })
        this.props.fecthingCommentsAuto()
        this.setState({
          comment: "",
          rate: 1,
          elementId: null,
        })
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
          <Button variant="primary" className="w-100" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddComment
