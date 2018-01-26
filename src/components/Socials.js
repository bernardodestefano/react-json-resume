import React from 'react';
import '../style.scss';


const Socials = props => {
  console.log(props.data);
  const profiles = props.data.map( profile =>
    <div key={profile.network} className="profile">
      <span>
        <i className={`fa fa-${profile.network}`}></i>
        <a target="_blank" href={profile.url}> {profile.username} </a>
      </span>
    </div>
  );

  return (
    <div>{profiles}</div>
  )
}

export default Socials;
