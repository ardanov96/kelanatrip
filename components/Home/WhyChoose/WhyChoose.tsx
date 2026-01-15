import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import WhyChooseCard from './WhyChooseCard';


const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        {/* Section Heading */}
        <SectionHeading heading="Why Choose Us" caption={''} captionsmall={''} />
        <SectionHeading caption="Signature Escapes Across the Archipelago’s New Jewels." heading={''} captionsmall={''}/>
        <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
            {/* Why Choose card */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />  
                <SectionHeading captionsmall="Enjoy peace of mind with our Best Price Guarantee on every booking" heading={''} caption={''}/> 
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
                <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />   
                <SectionHeading captionsmall="A simple and seamless booking process designed for your convenience." heading={''} caption={''}/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />   
                <SectionHeading captionsmall="Our customer care team is available 24/7 to assist you anytime, anywhere" heading={''} caption={''}/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose;