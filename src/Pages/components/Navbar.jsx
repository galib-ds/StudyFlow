import PButton from "./shared/PButton";
import SButton from "./shared/SButton";
import Logo from "./shared/Logo";

const Navbar = ()=>{
    return (
        <div className="bg-[#f0f1eb]">
            <nav className="container mx-auto flex justify-around items-center py-4">
                <a href="#">                  
                    <Logo />
                </a>

                <ul className="flex gap-8 items-center">
                    <li><a href="/features" target="_blank" className="text-slate-700 hover:text-[#0e7c66]">Features</a></li>
                    <li><a href="/how-it-works" target="_blank" className="text-slate-700 hover:text-[#0e7c66]">How it works</a></li>
                    <li><a href="/pricing" target="_blank" className="text-slate-700 hover:text-[#0e7c66]">Pricing</a></li>
                    <li><a href="/faq" target="_blank" className="text-slate-700 hover:text-[#0e7c66]">FAQ</a></li>
                </ul>

                <div className="flex gap-4 items-center">                  
                    <a href="/login" target="_blank">
                        <SButton
                        text={"Login"}
                        />
                    </a>
                    <a href="/getstarted" target="_blank">
                        <PButton
                        text={"Get Started"}
                        />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar