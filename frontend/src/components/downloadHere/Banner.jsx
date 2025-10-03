import React from 'react';
import InfoSection from './InfoSection';
import CTASection from './CTASection';

/**
 * Banner container reflecting the positioned layout from the static design.
 */
const Banner = () => {
  return (
    <section
      className="banner"
      style={{ left: '147.5px', top: '150.5px', width: '3015px', height: '2199px' }}
      aria-label="Banner container"
    >
      <InfoSection />
      <CTASection />
    </section>
  );
};

export default Banner;
