import React from 'react';
import Basics from './forms/Basics';
import Skills from './forms/Skills';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        basics: {
          name: '',
          role: '',
          picture: '',
          email: '',
          phone: '',
          website: '',
          summary: ''
        },
        skills: {
          name: '',
          level: '',
          keywords: []
        }

      }

      this.handleForms = this.handleForms.bind(this);
    }

    handleForms(data,type) {
      this.setState({[type]: data});
      setTimeout(()=>console.log(this.state),200);
    }

    render () {
      return (
        <div className="App">
          <Basics basics={this.state.basics} onSubmit={this.handleForms}/>
          <Skills skills={this.state.skills} onSubmit={this.handleForms}/>
        </div>
      )
    }
}

export default App;
