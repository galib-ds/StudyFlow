const Stats = () => {
    return (
        <div className="bg-[#f0f1eb] py-12 text-center">
            <div className="container mx-auto grid grid-cols-4">
                <div className="">
                    <h2 className="font-bold text-4xl text-[#0e7c66]">
                        12,400+
                    </h2>
                    <p className="text-gray-600 text-lg">
                        students uses StudyFlow
                    </p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl text-[#0e7c66]">
                        1.2M
                    </h2>
                    <p className="text-gray-600 text-lg">
                        tasks checked off
                    </p>
                </div> 
                <div className="">
                    <h2 className="font-bold text-4xl text-[#0e7c66]">
                        89%
                    </h2>
                    <p className="text-gray-600 text-lg">
                        report better focus
                    </p>
                </div>
                <div className="">
                    <h2 className="font-bold text-4xl text-[#0e7c66]">
                        4.8/5
                    </h2>
                    <p className="text-gray-600 text-lg">
                        average rating
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;