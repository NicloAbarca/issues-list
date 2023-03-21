import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import IssueDetailPage from './containers/DetailPage/IssueDetailPage';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/twitter/bootstrap/issues/:issueId" component={IssueDetailPage}>
      </Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
