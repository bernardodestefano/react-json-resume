import React from 'react';
import '../style.scss';


const Profiles = props => {
  const profiles = props.data.map( profile => {
    return <div key={profile.network} className="profile">
      <span>
        <i className={`fa fa-${profile.network}`}></i>
        <a target="_blank" href={profile.url}> {profile.username} </a>
      </span>
    </div>
  });

  return (
    <div>{profiles}</div>
  )
}

export default Profiles;
