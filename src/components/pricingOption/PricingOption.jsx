import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOption = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData)
    return (
        <div>
            <h2>Get Our MemberShip :</h2>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
                } */}
                {
                    pricingData.map(pricing =><DaisyPricingCard key={pricing.id}  pricing={pricing} ></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;