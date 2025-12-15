import { arrayFaqs } from "../utils/faqs/listFaqs";


const Faq = () => {
    return (
        <section className="w-full text-left">
            {arrayFaqs.map((items,idx) =>
                <div key={idx} className="">
                    {/* <div className="border-t-[0.5px] border-[#BDBDBD] border-dashed w-full my-4"></div> */}
                    <div className="flex items-center justify-between px-2">
                        <span className=" text-[#BDBDBD] font-[Roboto_Condensed] font-bold text-base lg:text-xl">{items.question}</span>
                        <span className="material-symbols-outlined">arrow_drop_down</span>
                    </div>
                    <p className="mt-3 text-[#212121] font-[Montserrat] font-normal text-xs lg:text-base px-2">
                        {items.answer}
                    </p>
                    <div className="border-t-[0.5px] border-[#BDBDBD] border-dashed w-full my-4"></div>
                </div>
            )}
        </section>
    )
};

export default Faq;