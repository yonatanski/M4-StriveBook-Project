import React from "react"
import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

function CommentList({ commentsToShow }) {
  return (
    <ListGroup>
      {commentsToShow.map((comment) => (
        <SingleComment comment={comment} />
      ))}
    </ListGroup>
  )
}

export default CommentList
