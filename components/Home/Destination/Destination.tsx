import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/* Section Heading */}
        <SectionHeading heading=" Beyond Bali: Discover Indonesia’s Next Wonders." />
        {/* Section Content */}
        <div className="mt-14 w-[80%] mx-auto">
            {/* Slider */}
            <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination