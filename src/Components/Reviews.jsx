import { Star } from "lucide-react";

const CarInfo =[
    {
        img:"/public/car40.png",
        names:"2021 Cadillac Escalade",
        miles:"The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
        user:"/public/man50.png",
        userName:"Hironaka Hiroe",
        userProfection:"Chief Editor",
        rating:4.91,
        revievCount:98,
    },
    {
        img:"/public/car41.png",
        names:"2021 Hyundai Elantra",
        miles:"If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
        user:"/public/man51.png",
        userName:"Debashis Bhuiyan",
        userProfection:"News Editor",
        rating:4.65,
        revievCount:93,
    },
    {
        img:"/public/car42.png",
        names:"2021 Mercedes-Benz GLA250",
        miles:"The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
        user:"/public/man52.png",
        userName:"Lew Silverton",
        userProfection:"Chief Editor",
        rating:4.55,
        revievCount:35,
    }
];

export const Reviews =() =>{


    return(
        <>
        <section className="mt-10 md:mt-20">
            <h1 className="md:text-center mx-3 text-2xl md:text-4xl font-semibold md:font-bold">Trending near you</h1>

            {/* Maping Here */}
            <div className="flex overflow-x-auto md:justify-center snap-x snap-mandatory scroll-smooth justify-start pt-6 md:pt-12 gap-3 px-6 scrollbar-hide">
    {CarInfo.map(({ img, names, miles, user , userName, userProfection, rating, revievCount}, i) => (
        <div key={i} className="snap-start shrink-0 w-[330px] md:w-[400px] pl-2 rounded-lg">
            
            <img className="w-full h-auto rounded-lg cursor-zoom-in hover:scale-105 transition-all duration-300" src={img} alt={names} />
            
            <h1 className="text-base text-[#0D0A19] font-semibold md:text-xl mt-2 md:mt-3">{names}</h1>
            <p className="text-[#9A9EA7] text-sm mt-1 ">{miles}</p>

            <div className="flex justify-between mt-5">
            
            <div className="flex gap-2  items-center">
                <div><img src={user} className="size-10" /></div>
                <div>
                    <h1 className="font-semibold text-[#0D0A19]">{userName}</h1>
                    <h2 className="text-sm text-[#0D0A19]">{userProfection}</h2>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <Star className="fill-[#EF8354] stroke-0 size-5"/>
                <p className="font-semibold">{rating}</p>
                <p className="text-sm text-[#9A9EA7]">({revievCount})</p>
            </div>

            </div>
        </div>
    ))}
</div>

        </section>
        </>
    )
};
