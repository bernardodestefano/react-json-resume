import React from 'react';

class Basics extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.basics;

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
    this.props.onSubmit(this.state, "basics");
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange} /> </label>
        <label> role: <input name="role" type="text" value={this.state.role} onChange={this.handleChange} /> </label>
        <label> picture: <input name="picture" type="text" value={this.state.picture} onChange={this.handleChange} /> </label>
        <label> email: <input name="email" type="text" value={this.state.email} onChange={this.handleChange} /> </label>
        <label> phone: <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} /> </label>
        <label> website: <input name="website" type="text" value={this.state.website} onChange={this.handleChange} /> </label>
        <label> summary: <input name="summary" type="text" value={this.state.summary} onChange={this.handleChange} /> </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Basics;
