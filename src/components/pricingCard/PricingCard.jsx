import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing)
   


    return (
        <div className='border bg-sky-600 rounded-2xl p-4 text-white'>
            {/* card header  */}
            <div>
                <h1 className='text-5xl'>{pricing.name}</h1>
                <h4 className='text-3xl'>{pricing.price}</h4>
            </div>
            {/* card body */}
            <div className='bg-amber-300 rounded-2xl p-4'>
                <p>{pricing.description}</p>
                {
                 pricing.features.map(feature => <PricingFeature  feature={feature}></PricingFeature>)
                }
            </div>
            
        </div>
    );
};

export default PricingCard;