import React from 'react'

function Map() {
    return (
        <div className="overflow-hidden relative">
        <div className="mt-20 md:mt-32 flex justify-center md:w-[1400px] mx-auto relative">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05054950784!2d-74.30915993230967!3d40.69719336013737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z4Kao4Ka_4KaJIOCmh-Cmr-CmvOCmsOCnjeCmlSwg4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sin!4v1743067977246!5m2!1sbn!2sin"
            className="w-[370px] h-[300px] md:w-full md:h-[500px] rounded-lg mx-2"
        ></iframe>
        {/* Overlay */}
        <div className="absolute inset-0 h-2/3 bg-gradient-to-b from-white to-transparent pointer-events-none"><h1 className=' z-50 text-2xl md:text-4xl text-[#0D0A19] font-bold text-center mt-7 md:mt-16'>Find vehicles near you</h1>
        </div>
        </div>
    </div>
    )
}

export default Map