import { FaCheck } from "react-icons/fa";

const PricingCard = ({plan}) => {
    return (
        <div 
                        key={plan.id} 
                        className={`flex flex-col justify-around card bg-white p-6 rounded-3xl shadow-xl max-w-100
                            ${plan.name === 'Pro Plan' ? 'border-2 border-[#0e7c66]' : ''}`}
                        >
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <p className="text-gray-700 text-sm mt-2">
                            {plan.description}
                        </p>
                        <p className="text-black text-5xl font-semibold">
                                {plan.price}  
                            <span className="text-gray-500 text-sm">
                                /{plan.expiration}
                            </span>
                        </p>
                        <ul className="text-gray-700 space-y-6 mt-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheck className="text-green-500 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`btn mt-4 w-full rounded-xl
                            ${plan.name === 'Pro Plan' ? 'bg-[#0e7c66] hover:bg-[#0b5e4f] text-white' : ''}`}>
                            get started
                        </button>
                    </div>
    );
};

export default PricingCard;