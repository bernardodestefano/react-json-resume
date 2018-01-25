import React from 'react';
import '../style.scss';


class Basics extends React.Component {
  constructor(props) {
    super(props);

    this.state= this.props.basics;
  }


  render() {
    let picture=null;

    if(this.state.picture) {
      picture= <img className="basics__picture" src={this.state.picture} alt="profile img"/>
    }

    return (
      <section className="basics">
        <div className="basics__heading">
          <h1>{this.state.name}</h1>
          <h2>{this.state.label}</h2>
          <p>{this.state.location}</p>
        </div>
        <div className="basics__pic-container">{picture}</div>

      </section>
    )
  }
}

export default Basics;
