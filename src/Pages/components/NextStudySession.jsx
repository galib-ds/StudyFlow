import SectionHeader from "./shared/SectionHeader";
import PButton from "./shared/PButton";

const NextStudySession = () => {
    return (
        <div className="card max-w-300 text-center mx-auto bg-white p-8 rounded-3xl shadow-md space-y-4 px-37.5 py-12.5 ">
            <SectionHeader 
                title="Your next study session could be the one that sticks"
                subtitle="Set your first goal in under two minutes. No credit card required."
            />
            <PButton 
                text={"Get Started"} 
            />
        </div>
    );
};

export default NextStudySession;