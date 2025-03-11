import React from 'react';

import "../styles/Avatar.scss";

const Avatar = () => {
    const username = JSON.parse(localStorage.getItem("username"));

  return (
    <div className='avatar_parent'>
      <h4 className='avatar'>{username.slice(0,1)}</h4>
      <span>{username}</span>
    </div>
  )
}

export default Avatar
