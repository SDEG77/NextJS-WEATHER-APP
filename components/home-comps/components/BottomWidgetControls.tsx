import type { Swiper as SwiperType } from "swiper/types";
import { RefObject } from "react";

type props = {
  ref: RefObject<SwiperType | null>
}

const caratButtonStyle: string = "leading-none px-4 py-3 rounded-4xl backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-all cursor-pointer";

export default function BottomWidgetControls({ref}: props) {
  const swiperRef = ref;

  return (
    <div className="flex justify-between items-center gap-4 mb-8 px-2">
      {/* Previous day button */}
      <div className="flex gap-4">
        <p className="font-bold">&lt; Thursday</p>
      </div>

      {/* Hour slider buttons */}
      <div className="flex gap-4 font-bold text-2xl">
        <button onClick={() => swiperRef.current?.slidePrev()} className={caratButtonStyle}>
          &lt;
        </button>

        <button onClick={() => swiperRef.current?.slideNext()} className={caratButtonStyle}>
          <p>&gt;</p>
        </button>
      </div>

      {/* Next day button */}
      <div className="flex gap-4">
        <p className="font-bold">Saturday &gt;</p>
      </div>
    </div>
  )
}