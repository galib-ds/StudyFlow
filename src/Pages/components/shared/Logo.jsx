import { LuNotebookPen } from "react-icons/lu";

const Logo = () => {
    return (
        <div>
            <a href="/">
                <h2 className="text-2xl font-bold text-[#0e7c66] flex items-center">
                    <LuNotebookPen className="bg-[#0e7c66] text-white rounded-[25%] p-2 h-10 w-10 mr-3"/>
                    <span className="text-slate-700">Study</span>Flow
                </h2>
            </a>
        </div>
    );
};

export default Logo;