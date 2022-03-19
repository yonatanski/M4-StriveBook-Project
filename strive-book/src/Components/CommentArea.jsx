import { Component } from "react"
import { ListGroup } from "react-bootstrap"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"

class CommentArea extends Component {
  state = {
    comment: [], // fetched comment gonna put here
    isLoading: false,
    isError: false,
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      })
      this.fecthingComments()
    }
  }
  fecthingComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: process.env.REACT_APP_TOKEN,
        },
      })
      console.log(response)
      console.log(process.env.REACT_APP_BE_API)
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
        <AddComment asin={this.props.asin} fecthingCommentsAuto={this.fecthingComments} />
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentList commentsToShow={this.state.comment} />
      </>
    )
  }
}

export default CommentArea
