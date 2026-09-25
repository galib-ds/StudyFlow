import PButton from "./shared/PButton";
import SButton from "./shared/SButton";
import Logo from "./shared/Logo";

const Navbar = ()=>{
    return (
        <div className="bg-[#f0f1eb]">
            <nav className="container mx-auto flex justify-around items-center py-4">                      
                <Logo />
            
                <ul className="flex gap-8 items-center">
                    <li><a href="/features" className="text-slate-700 hover:text-[#0e7c66]">Features</a></li>
                    <li><a href="/how-it-works" className="text-slate-700 hover:text-[#0e7c66]">How it works</a></li>
                    <li><a href="/pricing" className="text-slate-700 hover:text-[#0e7c66]">Pricing</a></li>
                    <li><a href="/faq" className="text-slate-700 hover:text-[#0e7c66]">FAQ</a></li>
                </ul>

                <div className="flex gap-4 items-center">                  
                    <a href="/login">
                        <SButton
                        text={"Login"}
                        />
                    </a>
                    <a href="/getstarted">
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