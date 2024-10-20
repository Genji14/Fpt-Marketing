"use client";

import Image from "next/image";
import ComboBgImage from "@/assets/combo-bg.png";
import { useState } from "react";
import { ComboSelectEnum } from "@/constants";
import { ComboSelect } from "./ComboSelect";

export const ComboSection = () => {
  const [selectedType, setSelectedType] = useState<ComboSelectEnum>(
    ComboSelectEnum.STANDARD
  );

  return (
    <section
      id="sec-combo"
      className="scroll-mt-12 px-60 py-12 relative h-[600px]"
    >
      <div className="absolute w-full -translate-y-1/2 top-1/2 inset-x-0 rounded-2xl overflow-hidden aspect-[25/9] px-60">
        <Image
          height={2000}
          width={2000}
          src={ComboBgImage}
          alt="Combo Background"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-between z-[5] relative px-24 h-full">
        <div className="flex flex-col">
          <h1 className="text-4xl text-orange font-bold">Combo</h1>
          <h2 className="text-3xl text-white font-bold">Internet x FPT Play</h2>
          <ComboSelect
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
        <p className="text-xxs text-white">
          Đối với các gói 1 Gbps - Tốc độ Download/Upload là không giới hạn phụ
          thuộc vào thiết bị lên tới 1 Gbps.
        </p>
      </div>
    </section>
  );
};
