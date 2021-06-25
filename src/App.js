import "./App.css"
import ShowColor from "./screens/ShowColor"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <ShowColor></ShowColor>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
