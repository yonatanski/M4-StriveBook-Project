import React from "react"
import { ListGroup, Button } from "react-bootstrap"

function SingleComment(props) {
  const deleteComment = async (asin) => {
    try {
      // console.log(dleteID)
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2NDcwNzcwODgsImV4cCI6MTY0ODI4NjY4OH0._G5MVtShZZlAuU1aWMtFyGlOQiq7uPBY0cFw6b9eBFE",
        },
      })
      if (response.ok) {
        alert("Comment deleteddd")
      } else {
        console.log("error")
        alert("Comment NOT deletedd!")
      }
    } catch (error) {
      alert("Comment NOT deleted")
    }
  }
  return (
    <>
      <ListGroup.Item>
        {props.comment.comment}-{props.comment.rate}
      </ListGroup.Item>
      <Button variant="danger" className="ml-2" onClick={() => deleteComment(props.comment._id)}>
        D
      </Button>
    </>
  )
}

export default SingleComment
