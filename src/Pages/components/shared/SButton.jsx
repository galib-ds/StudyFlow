const SButton = ({text}) => {
    return (
        <div>
            <button className="px-8 py-2 font-semibold text-[18px] text-slate-700 hover:text-[#0e7c66]">
                {text}
            </button>    
        </div>
    );
};

export default SButton;