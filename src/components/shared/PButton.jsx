const PButton = ({text}) => {
    return (
        <div>
            <button className="bg-[#0e7c66] hover:bg-[#0c5748] text-white px-4 py-2 rounded-md font-semibold text-[18px]">
                {text}
            </button>
        </div>
    );
};

export default PButton;