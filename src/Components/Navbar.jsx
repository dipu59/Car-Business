import { useState, useEffect } from "react";
import { User, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);



  return (
    <nav className="z-50 p-4 pt-6  sticky top-0 bg-transparent backdrop-blur-sm md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <img src="Logo.png" alt="" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden ml-42"
        >
          {isOpen ? <X size={28} color="black"/> : <Menu size={28} color="black"/>}
        </button>

        {/* Nav Links */}
        <div className="md:flex md:space-x-6">
          {isLargeScreen ? (
            <ul className="md:flex md:space-x-3">
              {["Used Cars", "Auctions", "New Cars", "Sell Cars", "Local Dealers", "Support","Sign Up"].map((item) => (
                <li key={item} className="text-[#0D0A19] font-semibold px-4 text-[17px] py-2 md:py-0 hover:bg-blue-700 md:hover:bg-transparent">
                  <a href="#" className={`flex items-center ${item === "Sign Up" ? "gap-2 text-[#9A9EA7] text-base" : ""}`}>
      {item === "Sign Up" && (
        <span className="bg-[#F5F6F7] p-2 rounded-xl flex items-center justify-center">
          <User size={19} fill="#9A9EA7" stroke="#9A9EA7"  />
        </span>
      )} {/* Left side icon */}
      {item}
    </a>
                </li>
              ))}
            </ul>
          ) 
          // Mobile Responsive
          : (
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden absolute top-16 left-0 w-full bg-slate-950 md:hidden"
                >
                  {["Used Cars", "Auctions", "New Cars", "Sell Cars", "Local Dealers", "Support","Sign Up"].map((item) => (
                    <li key={item} className="text-white border-gray-400 border px-4 py-2 hover:bg-blue-700 last:bg-green-500 last:hover:bg-green-600 last:flex last:items-center last:justify-center last:gap-2 last:py-3">
                      <a href="#" className={`flex items-center ${item === "Sign Up" ? "text-gray-100 font-semibold text-xl" : ""}`} >{item}</a>
                      {item === 'Sign Up' && <User size={22}/> }
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </nav>
  );
}
