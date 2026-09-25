const FeaturedCard = ({icon, title, description}) => {

    return (
            <div className="text-left space-y-3 bg-white rounded-2xl px-5 py-10 shadow-lg">
                     {icon}
                <h2 className="font-bold text-2xl">
                     {title}
                </h2>
                <p className="text-gray-600 text-[16px]">
                     {description}
                </p>
            </div>
    );
};

export default FeaturedCard;