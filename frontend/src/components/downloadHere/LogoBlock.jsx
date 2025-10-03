import React from 'react';

/**
 * LogoBlock renders the stacked tower image with two centered wordmark images.
 */
const LogoBlock = () => {
  return (
    <div className="logo-block radius-8" style={{ left: '1128px', top: '170px', width: '459px', height: '609px' }}>
      <div className="tower" style={{ left: 0, top: 0, width: '459px', height: '522px' }}>
        <img src="/assets/figma_image_901_11.png" alt="Tower" className="cover radius-8" />
      </div>
      <div className="title-row" style={{ left: 0, top: '536px', width: '459px', height: '73px' }}>
        <img
          className="contain"
          src="/assets/figma_image_901_13.png"
          alt="Vector wordmark"
          style={{ position: 'absolute', left: '116px', top: 0, width: '227px', height: '33px' }}
        />
        <img
          className="contain"
          src="/assets/figma_image_901_14.png"
          alt="Workership"
          style={{ position: 'absolute', left: '122px', top: '39px', width: '215px', height: '34px' }}
        />
      </div>
    </div>
  );
};

export default LogoBlock;
