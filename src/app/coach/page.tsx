import Image from "next/image";

const CoachPage = () => {
    return (
        <section className="lg:px-16 lg:py-28 w-full flex flex-col items-center gap-10 md:gap-20">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16">
                <h2 className="text-center font-[Roboto_Condensed] font-bold text-3xl md:text-5xl">
                    Tu META <br />es MI objetivo
                </h2>
                <div className="relative w-[80%] md:w-[35%] lg:w-[20%] h-[300px] rounded-lg object-scale-down lg:object-contain">
                    <Image
                        src="/assets/trainer.jpg"
                        alt="personalTrainer"
                        className=" w-full h-fit rounded-lg"
                        preload={true}
                        fill={true}
                    /* objectFit="contain" */
                    />
                </div>
            </div>
            <p className="w-full md:w-[85%] lg:w-[60%] text-justify font-[Montserrat] font-normal">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. <br />
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
        </section>
    );
}

export default CoachPage;