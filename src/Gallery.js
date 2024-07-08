import React from 'react';
import Profile from './Profile';

function Gallery({ members }) {
    return (
      <div className="gallery">
        {members.map((member, index) => (
          <Profile key={index} name={member.name} role={member.role} photo={member.photo} />
        ))}
      </div>
    );
  }
  
  export default Gallery;