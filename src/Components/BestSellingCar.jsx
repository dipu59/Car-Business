const ExplorerInfo =[
    {
        img:"Bitmap32.png",
        names:"Subaru",
        price:"from $40k"
    },
    {
        img:"Bitmap33.png",
        names:"Volkswagen",
        price:"from $15k"
    },
    {
        img:"Bitmap34.png",
        names:"Toyota",
        price:"from $27k"
    },
    {
        img:"Bitmap35.png",
        names:"Mercedes-Benz",
        price:"from $60k"
    },
    {
        img:"Bitmap31.png",
        names:"Hyundai",
        price:"from $30k"
    },
    {
        img:"Bitmap.png",
        names:"Infiniti",
        price:"from $54k"
    }
]

const Explore =()=>{
return(
    <>
    <section className="mt-10 md:mt-18">
        <h1 className="md:text-center text-2xl md:text-3xl font-semibold mx-3">  Explore best selling car makes</h1>

        {/* Maping Start */}
        <div className="grid md:grid-cols-3 md:gap-14 mt-9 md:mt-12 gap-6 md:w-[760px]  mx-auto">
            {ExplorerInfo.map(
                ({img, names, price}, i)=>(
                    <div key={i} className={`flex justify-start md:justify-center gap-8 md:gap-5 items-center mx-5 hover:scale-110 transition-all duration-200 cursor-pointer active:scale-105
                    
                    ${i === 3 ? "md:pl-2 ":""}`}>
                        <img src={img}  className={`size-8 `}/>
                        <div className="">
                            <h1 className="font-semibold text-[#0D0A19] ">{names}</h1>
                            <h1 className="text-sm text-[#9A9EA7]">{price}</h1>
                        </div>
                    </div>
                )
            )

            }
        </div>
    </section>
    </>
)
};
export default Explore;