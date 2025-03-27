import { DotIcon, EarthIcon, Ellipsis, Globe } from "lucide-react";

const Footer=()=>{
return(
    <footer className="max-w-[1400px] overflow-hidden mx-auto">
    {/* large device ar jonno */}
    <div className="md:flex hidden justify-between text-sm my-5 w-2/3 mx-auto">
        <div className="flex gap-3 items-center">
            <h1 className="font-bold">Privacy Policy</h1>
            <h1 className="font-bold">Term of Use</h1>
            <p className="text-[#9A9EA7]">© 2021 All rights reserved</p>
        </div>
        <div className="flex gap-2 font-bold text-sm text-[#9A9EA7]">
            <p className="flex gap-2 items-center"><Globe className="size-4"/>English</p>
            <p className="flex gap-2 items-center"><Ellipsis className="size-4"/>USD</p>
        </div>
    </div>
    {/* Mobile device ar jonno Code */}
    <div className="block md:hidden mt-3 mb-4"> {/*Main Div Nikla hai */}
        <div className="mx-auto px-7 flex justify-between items-center font-semibold text-sm text-[#9A9EA7]">
            <div className="flex items-center gap-2 ">
            <Globe className="size-5"/><h1>English</h1>
            </div>
            <div className="flex items-center gap-2 ">
            <Ellipsis className="size-5"/><h1>USD</h1>
            </div>
        </div>

        <div className="flex flex-col justify-center text-center text-sm font-semibold gap-4 mt-9 text-[#0D0A19]">
            <h1>Term of Use</h1>
            <h2>Privacy Policy</h2>
            <h3 className="text-[#9A9EA7]">© {new Date().getFullYear()} All rights reserved.</h3>
        </div>
    </div>
    </footer>
)
};
export default Footer;