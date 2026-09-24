import { RiAiGenerate2 } from "react-icons/ri";

const AiDayPlanning = () => {
    return (
        <div className="container max-w-280 mx-auto bg-[#14231f] rounded-3xl grid grid-cols-2 py-15 px-15 gap-3 text-white">
            <div className="space-y-4">
                <h3 className="text-yellow-500 text-lg font-semibold flex gap-2 items-center uppercase">
                    <RiAiGenerate2 className="text-3xl"/> Ai Day Planning
                </h3>
                <h2 className="font-bold text-4xl py-6">
                    Not sure where to start? <br /> 
                    Let StudyFlow suggest a plan
                </h2>
                <p className="text-gray-400 text-lg">
                    One click on "Plan my day" turns your open tasks into a simple, realistic schedule, so the hardest part, starting, is already done for you.
                </p>
            </div>
            <div className="bg-[#1E302B] border border-[#ffffff3e] rounded-2xl  py-10 px-10 max-w-150 mx-auto">
                <h2 className="uppercase font-semibold text-lg">
                    Today's Suggested Plan
                </h2>
                <ul className="text-gray-400 text-[16px] space-y-2 mt-4 text-nowrap">
                    <li className="bg-[#253A35] px-6 py-3 rounded-2xl">
                        <span className="font-bold text-white mr-2">
                            9:00 - 9:45 
                        </span> 
                        Deep work on your hardest task
                    </li>
                    <li className="bg-[#253A35] px-6 py-3 rounded-2xl">
                        <span className="font-bold text-white mr-2">
                            9:45 - 10:30
                        </span>
                        Review and respond to emails
                    </li>
                    <li className="bg-[#253A35] px-6 py-3 rounded-2xl">
                        <span className="font-bold text-white mr-2">
                            10:30 - 11:15
                        </span>
                        Team meeting
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AiDayPlanning;