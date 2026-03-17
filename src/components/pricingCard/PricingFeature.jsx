import React from 'react';
import { BadgeCheck } from 'lucide-react';
const PricingFeature = ({feature}) => {
    console.log(feature)
    return (
      
        <p className='flex mt-3'><BadgeCheck className='mr-2'></BadgeCheck>{feature}</p>
    );
};

export default PricingFeature;