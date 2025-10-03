import React from 'react';

/**
 * ProfileBlock shows the circular avatar and name.
 */
const ProfileBlock = () => {
  return (
    <div className="profile" style={{ left: '1093.5px', top: 0, width: '528px', height: '112px' }}>
      <div className="pf-img" style={{ left: '16px', top: '16px', width: '80px', height: '80px' }}>
        <img
          src="/assets/figma_image_901_8.png"
          alt="Profile image"
          className="cover radius-10000 bordered-4-white"
        />
      </div>
      <div className="name typo-52" style={{ left: '120px', top: '20px', width: '376px', height: '73px' }}>
        Irvan Wibowo
      </div>
    </div>
  );
};

export default ProfileBlock;
