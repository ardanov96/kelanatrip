import React from 'react';

type Props = {
    heading: string;
    caption: string;
    captionsmall: string;
};

const SectionHeading = ({ heading, caption, captionsmall}: Props) => {
  return (
    <div className="w-[80%] mx-auto">
        <h1 className='text-xl sm:text-3xl text-teal-950 font-bold'>{heading}</h1>
        <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>
            {caption}
        </p>
        <p className="mt-2 text-center text-xs font-medium text-gray-700">
            {captionsmall}
        </p>
    </div>
  );
};

export default SectionHeading;