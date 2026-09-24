import SectionHeader from "./shared/SectionHeader";
import PricingCard from "./shared/PricingCard";

const Pricing = () => {

    // Database or API call to fetch pricing plans can be added here
    const pricingPlans = [
        {
            id: 1,
            name: 'Free Plan',
            description: 'Everything you need to get organized.',
            price: '$0',
            expiration: 'forever',
            features: [
                'Unlimited tasks and goals',
                '5 subjects',
                'Focus time',
                '7-day history'
            ]
        },
        {
            id: 2,
            name: 'Pro Plan',
            description: 'For students who want the full picture.',
            price: '$6',
            expiration: 'monthly',
            features: [
                'Everything in Free',
                'Unlimited subjects',
                'AI day planning',
                'Full history and insights',
                'Priority support'
            ]
        },
    ];
    
    return (
        <div className="container mx-auto space-y-8 py-12">
            <SectionHeader 
                title="Simple pricing" 
                subtitle="Start free. Upgrade if you outgrow it."
            />

            <div className="grid grid-cols-2 gap-8 max-w-250 mx-auto">
                {pricingPlans.map((plan) => (
                    <PricingCard 
                        key={plan.id}
                        plan={plan}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pricing;