const SectionHeader = ({title, subtitle}) => {
       
    return (
        <div className="max-w-175 mx-auto space-y-3 text-center">
            <h2 className="font-semibold text-4xl ">
                {title}
            </h2>
            <p className="text-gray-600 text-[20px]">
                {subtitle}
            </p>
        </div>
    );           
};

export default SectionHeader;