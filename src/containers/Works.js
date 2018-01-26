import React from 'react';

class Works extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const worksList = this.props.works.map( work => {
      return <div>
        <span>{work.position}</span><span>{work.company}</span>
      </div>
    });

    return (
        <div>{worksList}</div>
    )
  }
}

export default Works;
