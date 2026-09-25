import Logo from "./shared/Logo";

const FooterSection = () => {
    const date = new Date();
    return (
        <footer className="bg-white py-10 mt-20">
                <div className="container max-w-313 mx-auto grid grid-cols-4 gap-6">
                    <div>
                        <a href="#">
                            <Logo />
                        </a>
                        <p className="text-gray-600 mt-6 text-[16px]">
                            A study dashboard for turning goals into daily progress.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <ul className="space-y-2">
                            <li className="text-black font-bold">Product</li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Features</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">How it works</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Pricing</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <ul className="space-y-2">
                            <li className="text-black font-bold">Company</li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Careers</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <ul className="space-y-2">
                            <li className="text-black font-bold">Resources</li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Help center</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Study tips</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#0e7c66]">Contact</a></li>
                        </ul>
                    </div>
                </div>
               
                <p className="max-w-313 mx-auto text-center text-gray-500 mt-6 pt-3 border-t border-gray-400">
                    © {date.getFullYear()} StudyFlow. All rights reserved.
                </p>
        </footer>
    );
};

export default FooterSection;