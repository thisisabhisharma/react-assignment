import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Context from "./store/context"
import useGlobalState from "./store/GlobalState"
import "./style/style.scss"

//wraping up app into context
const Index = () => {
  const store = useGlobalState()
  return (
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
