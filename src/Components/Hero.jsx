import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "Header Image.png",
    "https://mma.prnewswire.com/media/1889412/Honda_2023_Civic_TypeR.jpg?p=twitter",
    "https://www.hondalatincaribbean.com/upload/car/civic-type-r-2023/feature/exterior/civic-type-r-2023-lhd-the-pinnacle-of-honda-factory-performance.jpg"
    ,
    "https://www.motortrend.com/uploads/sites/5/2021/04/2021-Honda-Civic-Type-R-Limited-Edition-rear-three-quarter-in-motion.jpg",
    "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2017-10%2Frolls-royce-phanton-8_827x510_71508233742.jpg&w=3840&q=75"

    ];

const heading=[
        "Honda Civic Type R",
        "Hottest Hot Hatch Brings ",
        "Hondalatincaribbean - Master",
        "Limited Edition First Test",
        "Rolls Royce Phantom Metal Diecast Car "
    ]
    export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-[1400px] mx-auto mt-10 md:mt-20">
            <p className="text-center text-[#9A9EA7] text-sm md:text-[16px]  mb-3">Meet your new car</p>
        {/* Dynamic Heading for car name */}
        <h1 className=" capitalize text-3xl font-bold text-center md:text-6xl custom-shadow">{heading[currentIndex]}</h1>
        {/* Button */}
        <div className="flex justify-center items-center my-3 md:my-8 md:pb-16 pb-10">
            <div>
                <button className="text-[#9A9EA7]  bg-[#F5F6F7] font-semibold px-4 md:px-10 md:py-3 py-2 mx-1 rounded-lg cursor-pointer">More Details</button>
                <button className=" bg-[#7963F0] text-white font-semibold px-4 md:px-10 md:py-3 py-2 mx-1 rounded-lg cursor-pointer">Test Drive</button>
            </div>
        </div>
        {/* Images */}
        <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="md:w-full w-full h-[230px] md:h-[400px] md:object-cover  object-cover"
        />

        {/* Buttons */}
        <button
            onClick={prevSlide}
            className="absolute left-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer"
        >
            <ChevronLeft size={24} />
        </button>

        <button
            onClick={nextSlide}
            className="absolute right-4 md:top-1/2 top-2/3 transform -translate-y-1/2 bg-black/50 cursor-pointer text-white p-2 rounded-full"
        >
            <ChevronRight size={24} />
        </button>
        </div>
    );
}
