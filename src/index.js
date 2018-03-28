import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import reducers from "./reducers"

const store = createStore(combineReducers(reducers))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
