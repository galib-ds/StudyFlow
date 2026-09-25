import SectionHeader from "./shared/SectionHeader";
import FeaturedCard from "./shared/FeaturedCard";
import { TbTargetArrow } from "react-icons/tb";
import { FaListCheck } from "react-icons/fa6";
import { BsFillLightningChargeFill } from "react-icons/bs";


const Studying = () => {
    return (
        <div className="container max-w-280 mx-auto py-18.75 space-y-10">
            <SectionHeader 
                title={"studying without a system is exausting"}
                subtitle={"You're not lacking discipline. You're lacking a place where your goals turn into today's tasks."}
            />
            {/* Card Section */}
            <div className="grid grid-cols-3 gap-8">
                <FeaturedCard 
                    icon={<TbTargetArrow className="text-3xl text-[#0e7c66]"/>}
                    title={"Goals stay vague"}
                    description={"\"Get better at math\" doesn't tell you what to open your laptop and do this afternoon."}
                />
                <FeaturedCard 
                    icon={<FaListCheck className="text-3xl text-[#0e7c66]"/>}
                    title={"Plans live everywhere"}
                    description={"A to-do app, a notes app, a calendar - and none of them talk to each other."}
                />
                <FeaturedCard 
                    icon={<BsFillLightningChargeFill className="text-3xl text-[#0e7c66]"/>}
                    title={"Motivation fades fast"}
                    description={"Without something to point at, it's hard to tell if this week actually went anywhere."}
                />
            </div>
        </div>
    );
};

export default Studying;