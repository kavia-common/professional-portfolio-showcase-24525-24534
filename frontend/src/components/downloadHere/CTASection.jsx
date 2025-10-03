import React from 'react';

/**
 * CTASection holding the Behance/Gumroad logo and the "Download here" label.
 * Minimal interaction: this is a static showcase, so no click handlers are added.
 */
const CTASection = () => {
  return (
    <div className="cta-frame" style={{ left: '918.5px', top: '1879px', width: '878px', height: '170px' }}>
      <div className="cta-inner" style={{ left: 0, top: 0, width: '878px', height: '170px' }}>
        <div className="behance" style={{ left: 0, top: '33.5px', width: '105px', height: '103px' }}>
          <img src="/assets/figma_image_901_56.png" alt="Behance logo" className="contain" />
          <div className="gumroad" style={{ left: '19.175px', top: '18.5px', width: '66px', height: '66px' }}>
            <img src="/assets/figma_image_901_58.png" alt="Gumroad logo" className="contain" />
          </div>
        </div>
        <div className="cta-text typo-55" style={{ left: '129px', top: 0, width: '749px', height: '170px' }}>
          Download here
        </div>
      </div>
    </div>
  );
};

export default CTASection;
