import React, { Component } from 'react';
import Jobs from './components/jobs';

class App extends Component {
  componentDidMount() {
    // Set title of the page
    document.title = "React Grid - Jimmy Bui";
  }
  
  render() {
    return (
        <div id="container">
            <div className="author">Jimmy Bui</div>
            <Jobs />
        </div>
    );
  }
}

export default App;