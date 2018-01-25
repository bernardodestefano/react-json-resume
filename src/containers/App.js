import React from 'react';
import Basics from './Basics';
import Skills from './Skills';
import data from '../data.json';
import '../style.scss';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = data;


    }

    render () {
      return (
        <div className="app">
          <Basics basics={this.state.basics}/>
          <Skills skills={this.state.skills}/>
        </div>
      )
    }
}

export default App;
