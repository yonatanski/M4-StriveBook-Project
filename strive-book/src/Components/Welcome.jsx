import { Jumbotron, Container, Col, Row } from "react-bootstrap"

const Welcome = (props) => (
  <Jumbotron className="mt-0 jambo">
    <div>
      <h1 className="ml-2 mt-0 mb-0 text-primary">Strive Book Store</h1>
      <strong className="ml-auto text-info">
        You will find a collection of books here
      </strong>
    </div>
  </Jumbotron>
)

export default Welcome
