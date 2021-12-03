import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./Components/MyNav"
import MyFooter from "./Components/MyFooter"
import Welcome from "./Components/Welcome"
import LatestRelease from "./Components/LatestRelease"
import WarningSign from "./Components/WarningSign"
import SingleBook from "./Components/SingleBook"
import BookList from "./Components/BookList"
import SciFi from "./scifi.json"

function App() {
  return (
    <div>
      <WarningSign color="primary" />
      <MyNav title="StriveBooks" />
      <Welcome />
      <SingleBook book={SciFi[0]} />
      {/* <LatestRelease /> */}
      <BookList books={SciFi} />

      <MyFooter />
    </div>
  )
}

export default App
