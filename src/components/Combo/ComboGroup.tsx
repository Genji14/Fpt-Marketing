import { ComboItemData, ComboSelectEnum, GameComboData, HighclassComboData, StandardComboData } from "@/constants";
import { ComboItem } from "./ComboItem";
import { useEffect, useState } from "react";

export const ComboGroup = ({
  selectedType,
}: {
  selectedType: ComboSelectEnum;
}) => {
  const [selectGroup, setSelectGroup] = useState(StandardComboData);

  useEffect(() => {
    switch (selectedType) {
      case ComboSelectEnum.GAME:
        setSelectGroup(GameComboData)
        break;
      case ComboSelectEnum.HIGHCLASS:
        setSelectGroup(HighclassComboData);
        break;
      case ComboSelectEnum.STANDARD:
        setSelectGroup(StandardComboData);
        break;
    }
  }, [selectedType]);

  return (
    <div className="grid grid-cols-3 gap-6 rounded-lg flex-auto">
      {selectGroup.map((item: ComboItemData) => (
        <ComboItem item={item} />
      ))}
    </div>
  );
};
