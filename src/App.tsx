import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// routes
import Index from "./page/index";
// Redux
import { Provider } from "react-redux";
import store from "./redux-root/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Index />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
