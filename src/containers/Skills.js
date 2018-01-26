import React from 'react';
import Skill from '../components/Skill';

class Skills extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const skills = this.props.skills.map( skill => {
      return <Skill data={skill} key={skill.name}/>
    });


    return (
      <section className="skills">
        {skills}
      </section>
    )
  }
}

export default Skills;
