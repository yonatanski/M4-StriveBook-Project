import React from "react"
import { ListGroup, Button } from "react-bootstrap"

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
        },
      }
    )
    if (response.ok) {
      alert("Comment deleted")
    } else {
      console.log("error")
      alert("Comment NOT deleted!")
    }
  } catch (error) {
    alert("Comment NOT deleted!")
  }
}

function SingleComment({ comment }) {
  return (
    <>
      <ListGroup.Item>{comment.comment}</ListGroup.Item>
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        D
      </Button>
    </>
  )
}

export default SingleComment
