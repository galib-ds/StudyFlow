import SectionHeader from "./shared/SectionHeader";
import FeaturedCard from "./shared/FeaturedCard";
import { FaListCheck } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillLightningChargeFill, BsGraphUpArrow } from "react-icons/bs";
import { RxStopwatch } from "react-icons/rx";
import { LuBrainCircuit } from "react-icons/lu";


const Featured = () => {
    return (
        <div className="container max-w-280 mx-auto py-18.75 space-y-10">
            <SectionHeader 
            title={"Everything a study session needs"} 
            subtitle={"Nothing you don't need, nothing you have to configure for an houre first."}
            />

            {/* Cards */}
            <div className="grid grid-cols-3 gap-7 py-3">
                <FeaturedCard 
                icon={<FaListCheck className="text-3xl text-[#0e7c66]"/>}
                title={"Daily task breakdown"}
                description={"Every goal splits into small tasks you can finish in one sitting."}
                />
                <FeaturedCard 
                    icon={<TbTargetArrow className="text-3xl text-[#0e7c66]"/>}
                    title={"Goal tracking"}
                    description={"See exactly how many tasks stand between you and each goal."}
                />
                <FeaturedCard 
                    icon={<BsGraphUpArrow className="text-3xl text-[#0e7c66]"/>}
                    title={"Subject insights"}
                    description={"Color-coded subjects show where your time is actually going."}
                />
                <FeaturedCard 
                    icon={<RxStopwatch className="text-3xl text-[#0e7c66]"/>}
                    title={"Focus timer"}
                    description={"A built-in Pomodoro timer to protect a block of real study time."}
                />
                <FeaturedCard 
                    icon={<BsFillLightningChargeFill className="text-3xl text-[#0e7c66]"/>}
                    title={"Visual progress"}
                    description={"Streaks, charts and progress bars that move when you do the work."}
                />
                <FeaturedCard 
                    icon={<LuBrainCircuit className="text-3xl text-[#0e7c66]"/>}
                    title={"AI day planning"}
                    description={"One click suggests a simple schedule for today's tasks."}
                />
            </div>
        </div>
    );
};

export default Featured;