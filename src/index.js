import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./_base.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter as Router } from "react-router-dom"


const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)
