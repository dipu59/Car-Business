const CarInfo =[
    {
        img:"/public/Img21.png",
        names:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        awd:"AWD",
        cylinder:"4-Cylinder Turbo",
        price:"$55,380",
        lavel:"Bestseller"
    },
    {
        img:"/public/Img22.png",
        names:"2013 Subaru Forester Premium Plus",
        miles:"40 475 Miles",
        awd:"AWD",
        cylinder:"4-Cylinder Turbo",
        price:"$22,500",
        lavel:"Bestseller"
    },
    {
        img:"/public/Img20.png",
        names:"Used 2010 BMW X3 Sport package",
        miles:"20 850 Miles",
        awd:"RWD",
        cylinder:"4-Cylinder",
        price:"$39,200",
        lavel:"Bestseller"
    }
];

export const Trandings =() =>{


    return(
        <>
        <section className="mt-10 md:mt-20">
            <h1 className="md:text-center mx-3 text-2xl md:text-4xl font-semibold md:font-bold">Trending near you</h1>

            {/* Maping Here */}
            <div className="flex overflow-x-auto md:justify-center snap-x snap-mandatory scroll-smooth justify-start mt-6 md:mt-12 gap-3 px-6 scrollbar-hide">
    {CarInfo.map(({ img, names, miles, awd, price, lavel, cylinder }, i) => (
        <div key={i} className="snap-start shrink-0 w-[330px] md:w-[400px] pl-2">
            <img className="w-full h-auto Xoverflow-hidden" src={img} alt={names} />
            <h1 className="text-base text-[#0D0A19] font-semibold md:text-xl mt-2 md:mt-3">{names}</h1>
            <p className="text-[#9A9EA7] text-sm mt-1 ">{miles}</p>

            <div className="flex gap-4 mt-3">
            <p className="text-[#9A9EA7] text-sm ">{awd}</p>
            <p className="text-[#9A9EA7] text-sm">{cylinder}</p>
            </div>

            <div className="flex gap-1 mt-4">
                <button className="bg-[#7863f021] text-[#7963F0] py-2 px-4 rounded-lg font-semibold">{price}</button>
                <button className="bg-[#F5F6F7] text-[#9A9EA7] py-2 px-4 rounded-xl font-semibold">{lavel}</button>
            </div>
        </div>
    ))}
</div>

        </section>
        </>
    )
};
