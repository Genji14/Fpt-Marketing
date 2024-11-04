"use client";

import { ComboSelectData, ComboSelectEnum } from "@/constants";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ComboSelectProps = {
  selectedType: ComboSelectEnum;
  setSelectedType: React.Dispatch<React.SetStateAction<ComboSelectEnum>>;
};

export const ComboSelect = ({
  selectedType,
  setSelectedType,
}: ComboSelectProps) => {
  return (
    <div className="flex items-center gap-2 my-4">
      {ComboSelectData.map((item, index) => (
        <Button
          key={index}
          className={cn(
            "py-2 h-fit text-xs font-bold border border-transparent",
            selectedType === item.type
              ? "bg-orange hover:bg-orange"
              : "bg-white text-black hover:bg-white hover:text-orange hover:border-orange"
          )}
          onClick={() => setSelectedType(item.type)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};
