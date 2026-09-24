import HowItWorksCard from "./shared/HowItWorksCard";
import SectionHeader from "./shared/SectionHeader";


const HowItWorks = () => {

    // Data from database
    const steps = [
        {
            title1: "01",
            title2: "Set a goal",
            description: "Finish Calculus II with an A. Big, specific, and yours."
        },
        {
            title1: "02",
            title2: "Break it into daily tasks",
            description: "Turn your big goal into small, manageable daily tasks."
        },
        {
            title1: "03",
            title2: "Watch your progress move",
            description: "Every task you check off fills the bar a little more."
        },
        // {
        //     title: "Step-3",
        //     description: "This is the third step of process."
        // },
        // {
        //     title: "Step-3",
        //     description: "This is the third step of process."
        // },
        // {
        //     title: "Step-3",
        //     description: "This is the third step of process."
        // }
    ];   

    return (
        <div className="container max-w-280 mx-auto py-17.5 space-y-10">
            <SectionHeader
                title={"How it works"}
            />

            <div className="grid grid-cols-3 gap-3">
                {steps.map((step, index)=> {
                        return(
                            <HowItWorksCard
                                key = {index}
                               index = {index}
                               step = {step} 
                            />
                        ); 
                })}
            </div>
        </div>
    );
};

export default HowItWorks;