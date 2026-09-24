import { MdDone } from "react-icons/md";
import PButton from "./shared/PButton";

const Banner = () => {
    return (
        <div className="container mx-auto text-center py-11.25 space-y-10">
            <span className="badge p-3">
                Built for students who like to see progress
            </span>
            <h2 className="font-semibold text-5xl max-w-175 mx-auto">
                Turn big goals into daily tasks you'll actually finish
            </h2>
            <p className="max-w-175 mx-auto text-gray-600 text-[18px]">
                Set a goal, break it into tasks, and watch a progress bar move every time you check one off. No spreadsheets, no guessing what to study next.
            </p>

            <div className="flex gap-2 items-center justify-center">
                <PButton
                    text={"Start For Free"}
                />
                <button className="btn border-[#0e7c66] text-[#0e7c66] hover:bg-[#0e7c66] hover:text-white text-[18px] px-4 py-2 font-semibold">
                    See How It Works
                </button>
            </div>

            <div className="card bg-base-100 text-gray-600 w-100 mx-auto shadow-sm space-y-3 px-5 py-4">
                <div className="flex justify-between gap-4 items-center">
                    <h2 className="font-semibold text-xl">
                        Todays progress
                    </h2>
                    <p className="font-bold text-black text-2xl">50%</p>
                </div>
                <progress className="progress text-[#0e7c66]" value="50" max="100"></progress>

                <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-3 border border-[#0e7c664a] rounded-xl p-3">
                        <MdDone className="text-[#0e7c66]"/>
                        <span className="line-through text-[16px]">Solve 10 integration problems</span> 
                    </li>
                    <li className="flex items-center gap-3 border border-[#0e7c664a] rounded-xl p-3">
                        <MdDone className="text-[#0e7c66]"/>
                        <span className="line-through text-[16px]">Read Chapter 4: Cell Structure</span> 
                    </li>
                    <li className="flex items-center gap-3 border border-[#0e7c664a] rounded-xl p-3">
                        <MdDone className="text-[#0e7c66]"/>
                        <span className="line-through text-[16px]">Write essay outline</span> 
                    </li>                
                </ul>
            </div>
        </div>
    );
};

export default Banner;