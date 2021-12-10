import { Component } from "react"
import { ListGroup } from "react-bootstrap"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

class CommentArea extends Component {
  state = {
    comment: [], // fetched comment gonna put here
    isLoading: true,
    isError: false,
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/commen/" + this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
          },
        }
      )
      console.log(response)
      if (response.ok) {
        let comments = await response.json()
        this.setState({ comment: comments, isLoading: false, isError: false })
      } else {
        console.log("error")
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentList commentsToShow={this.state.comment} />
      </>
    )
  }
}

export default CommentArea
