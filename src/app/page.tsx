import Image from "next/image";
import Faq from "../components/Faq";

export default function Home() {
    return (
        <section className="lg:px-16 lg:py-28 w-full flex flex-col items-center gap-10 md:gap-20">
            <div className="w-[90%] lg:w-[60%]">
                <p className=" text-center font-[Roboto_Condensed] text-2xl md:text-5xl text-[#000000]">
                    Entrena con propósito, <br></br>
                    <span className="text-[#FF8800] font-bold"> PERSONALIZA </span>
                    tu nutrición <br className="hidden sm:block"></br> y tu proceso
                </p>
            </div>
            <div className="relative w-[85%] sm:w-[70%] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[390px] object-contain lg:object-contain">
                <Image
                    src="/assets/home-image.webp"
                    alt="fitness-home"
                    className=" w-full h-auto"
                    preload={true}
                    fill={true}/* 
                    objectFit="cover" */
                />
            </div>
            <button className="bg-[#E64A19] rounded-full text-[#FFFFFF] text-xl lg:text-3xl font-[Montserrat] font-bold px-6 py-2 ">¡ Empieza YA !</button>
            <Faq />
                
        </section>
    );
}
