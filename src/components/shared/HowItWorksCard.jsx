const HowItWorksCard = ({step}) => {
    return (
        <div className="space-y-3 text-center">
            <h1 className="font-bold text-4xl text-[#0e7c66]">{step.title1}</h1>
            <h3 className="font-bold text-xl">{step.title2}</h3>
            <p className="text-gray-600">{step.description}</p>
        </div> 
    );
};

export default HowItWorksCard;