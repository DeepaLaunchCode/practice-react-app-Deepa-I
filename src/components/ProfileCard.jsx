import React from 'react';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h3>Name: {props.name}</h3>
      <p style={{ color: "red" }}>Age: {props.age}</p>
      <p style={{ color: "blue" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default ProfileCard;