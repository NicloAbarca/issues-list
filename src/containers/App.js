import React, { Component } from 'react';
import './App.css';
import IssueListPage from './IssueList/IssueList'
import {withRouter} from 'react-router-dom';

const IssueList = withRouter(props => <IssueListPage {...props}/>);

class App extends Component {
  render() {
    return (
      <div className="App">
       <IssueList />
      </div>
    );
  }
}

export default App;
