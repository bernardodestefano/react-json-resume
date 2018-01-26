import React from 'react';
import Basics from './Basics';
import Skills from './Skills';
import Works from './Works';
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
          <h1 className="section__title">SKILLS</h1>
          <Skills skills={this.state.skills}/>
          <h1 className="section__title">WORK EXPERIENCE</h1>
          <Works works={this.state.work}/>
        </div>
      )
    }
}

export default App;
