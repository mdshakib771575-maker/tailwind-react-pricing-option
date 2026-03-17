import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div>
            <h2>Get Our MemberShip :</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;