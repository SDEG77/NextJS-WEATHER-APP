"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import BottomWidgetControls from "./components/BottomWidgetControls";
import "swiper/css";
import { formatHour } from "@/utils/dateParser";

type props = {
  contents: {
    hours: string[];
    temps: number[];
  };
};

export default function BottomWidget({ contents }: props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const now: Date = new Date();

  const currentHourIndex = contents.hours.findIndex((hour) => {
    const date: Date = new Date(hour);

    return (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate() &&
      date.getHours() === now.getHours()
    );
  });

  const currentIndex = currentHourIndex === -1 ? 0 : currentHourIndex;

  return (
    <section
      className="w-full flex flex-col overflow-x-hidden"
    >
      <BottomWidgetControls ref={swiperRef} />

      <div className="w-full overflow-x-hidden flex items-center gap-8">

        {/* Fixed current card */}
        <div className="w-36 shrink-0 rounded-xl bg-white/10 backdrop-blur-md p-6">
          <p className="text-lg">
            {formatHour(contents.hours[currentIndex])}
          </p>

          <p className="mt-6 text-5xl font-bold">
            {contents.temps[currentIndex]}°
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
          {contents.hours
            .map((hour, index) => ({ hour, index }))
            .filter(({ index }) => index !== currentIndex)
            .map(({ hour, index }) => (
              <SwiperSlide key={hour}>
                <div className="flex flex-col gap-5">
                  <p>{formatHour(hour)}</p>

                  <p className="text-4xl font-bold">
                    {contents.temps[index]}°
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}