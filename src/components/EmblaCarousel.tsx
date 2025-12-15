"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel({ children }: { children: React.ReactNode }) {
  const autoplay = Autoplay({ delay: 500000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => autoplay.reset());
  }, [emblaApi, autoplay]);

  return (
    <div className="relative flex justify-center w-full md:w-[95%] lg:w-[74%]">
      <div className="embla w-full lg:w-[73%] overflow-hidden " ref={emblaRef}>
        <div className="embla__container flex h-full">{children}</div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-[-24] lg:left-3 -translate-y-1/2 bg-white text-[#BDBDBD] hover:text-[#FF8800] p-2 rounded-full shadow-md hover:shadow-[#E64A19] hover:scale-110 material-symbols-outlined"
      >
        arrow_back_ios_new
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-[-14] lg:right-3 -translate-y-1/2 bg-white text-[#BDBDBD] hover:text-[#FF8800] p-2 rounded-full shadow-md shadow-[#BDBDBD] hover:shadow-[#E64A19] hover:scale-110 material-symbols-outlined"
      >
        arrow_forward_ios
      </button>
    </div>
  );
}
