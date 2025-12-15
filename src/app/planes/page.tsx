import EmblaCarousel from "@/src/components/EmblaCarousel";
import { listPlanes } from "@/src/utils/plans/listPlanes";

export default function PlanesPage() {
  return (
    <section className="lg:px-16 lg:py-28 w-full flex flex-col items-center gap-10 md:gap-20">
      <h2 className="text-center font-[Roboto_Condensed] font-bold text-3xl md:text-5xl">
        Adquiere tu plan
      </h2>

      <EmblaCarousel>
        {listPlanes.map((plan, idx) => (
          <div key={idx} className="embla__slide mx-3 lg:mx-5 border-2 border-solid border-[#BDBDBD] hover:border-[#E64A19] bg-[#EBEBEB30] hover:bg-[#FFCCBC30] flex-none w-full md:w-72 lg:w-80 p-4 rounded-xl">
            <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold h-fit">
                {plan.name}
                <span className="text-xs ml-2 text-gray-500">({plan.duration})</span>
                </h3>

                <ul className="mt-3 list-disc ml-4 text-sm h-full">
                {plan.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>

                <button className="mt-4 px-3 py-1 bg-[#BDBDBD] hover:bg-[#E64A19] text-white rounded-md h-fit">
                Comprar
                </button>

            </div>
          </div>
        ))}
      </EmblaCarousel>

      <div className="w-[80%] text-justify">
        <h2 className="text-center font-[Roboto_Condensed] font-bold text-3xl md:text-5xl">Transformar tu cuerpo <br /> empieza por lo que haces cada día</h2>
        <p className="text-base text-[#2f2f2f] py-12">
            La alimentación y el entrenamiento no son solo hábitos: son la base de tu bienestar, tu energía y tus resultados.
            Muchas veces sabemos qué queremos cambiar, pero no sabemos por dónde empezar.
            Por eso en Vital App diseñamos planes claros, personalizados y fáciles de seguir, para que no tengas que adivinar
            qué comer, cómo entrenar o cómo organizar tu progreso.<br /><br />

            Cada plan está pensado para ayudarte a dar el siguiente paso, sin importar tu nivel.
            Ya sea que solo necesites aprender a comer mejor, mejorar tu rendimiento o contar con un acompañamiento completo,
            aquí encontrarás una opción que se adapta a ti.<br /><br />

            <span className="text-[#E64A19] font-bold">Tu transformación comienza con una decisión.</span><br />
            Elige el plan que se ajuste a tus objetivos y construyamos juntos la mejor versión de ti.
        </p>

      </div>
    </section>
  );
}
