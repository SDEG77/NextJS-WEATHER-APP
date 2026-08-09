"use client"

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import BottomWidgetControls from "./components/BottomWidgetControls";
import "swiper/css";

type props = {
  contents: {
    hour: string,
    temp: string,
  } []
}

export default function BottomWidget({ 
  contents = [{
    hour: "no hour provided",
    temp: "no temperature provided",
  }]
}: props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <BottomWidgetControls 
        ref={swiperRef}
      />

      <div className="w-full overflow-x-hidden flex items-center gap-8">
        {/* Fixed first card */}
        <div className="w-36 shrink-0 rounded-xl bg-white/10 backdrop-blur-md p-6">
          <p className="text-lg">{contents[0].hour}</p>

          <p className="mt-6 text-5xl font-bold">
            {contents[0].temp}
          </p>

          <p className="mt-4 text-lg">
            Currently
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          slidesPerView={7}
          spaceBetween={40}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="flex-1"
        >
          {contents.slice(1).map((content, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-5">
                <p>{content.hour}</p>
                <p className="text-4xl font-bold">
                  {content.temp}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
