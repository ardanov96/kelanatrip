import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard';

const News = () => {
  return (
    <div className="pt-16 pb-16">
        {/* Section Heading */}
        <SectionHeading heading="Exciting Travel News for You" caption={''} captionsmall={''}/>
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
            <div 
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
            >
                <NewsCard
                    image="/images/n1.png"
                    title="Beyond Bali: 10 Hidden Gems in Indonesia You Need to Visit in 2026"
                    date="10 January 2026"
                />
            </div>
            <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
            >
                <NewsCard
                    image="/images/n2.png"
                    title="From Volcanoes to Beaches: The Incredible Diversity of Indonesia"
                    date="27 December 2025"
                />
            </div>
            <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
            >
                <NewsCard
                    image="/images/n3.png"
                    title="Island Hopping in Raja Ampat: Everything You Need to Know"
                    date="12 December 2025"
                />
            </div>
            <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
            >
                <NewsCard
                    image="/images/n4.png"
                    title="Diving in Komodo National Park: A Journey into the Underwater Wild"
                    date="30 November 2025"
                />
            </div>
        </div>  
    </div>
  );
};

export default News;