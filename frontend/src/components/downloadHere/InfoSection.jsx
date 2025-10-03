import React from 'react';
import ProfileBlock from './ProfileBlock';
import LogoBlock from './LogoBlock';
import Headline from './Headline';
import Subtext from './Subtext';

/**
 * InfoSection renders the left-aligned info region including profile, logo block,
 * headline and subtext with absolute positioning to preserve pixel layout.
 */
const InfoSection = () => {
  return (
    <div className="info" style={{ left: '150px', top: '150px', width: '2715px', height: '1579px' }}>
      <ProfileBlock />
      <LogoBlock />
      <Headline />
      <Subtext />
    </div>
  );
};

export default InfoSection;
