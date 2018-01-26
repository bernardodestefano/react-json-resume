import React from 'react';
import '../style.scss';

const Skill = props => {
  const title = props.data.name;
  const level = props.data.level;
  const keywords = props.data.keywords;

  const keywordsList = keywords.map( keyword => {
    return <span key={keyword} className="keyword">{keyword}</span>
  });

  return (
    <div className="skill">
      <h3 className="skill__title">{title}</h3>
      <p className="skill__level">{level}</p>
      <div className="skill__level__bar"></div>
      <div className="keyword__list">{keywordsList}</div>
    </div>
  )
};

export default Skill;
