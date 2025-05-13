import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileContainer() {
  
  return (
    
  <div className="profile-container">
      <h1>User Profiles</h1>
      <div className="cards">
      <ProfileCard name="Carrie" age="35"  bio="Aspiring software engineer, Great instuctor" />
         <ProfileCard name="Shelvy" age="28"  bio="Aspiring Web Developer" />
      
      </div>
       </div>
    
  );
}

export default ProfileContainer;