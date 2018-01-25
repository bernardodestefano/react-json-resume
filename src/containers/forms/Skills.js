import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.skills;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   const target = event.target;
   //const value = target.type === 'checkbox' ? target.checked : target.value;
   const value = target.value;
   const name = target.name;

   this.setState({
     [name]: value
   });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state, "skills");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange} /> </label>
        <label> level: <input name="level" type="text" value={this.state.level} onChange={this.handleChange} /> </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Skills;
