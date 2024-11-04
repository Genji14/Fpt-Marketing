export enum ComboSelectEnum {
  STANDARD = "standard",
  GAME = "game",
  HIGHCLASS = "high-class",
}

export type TComboSelect = {
  type: ComboSelectEnum;
  label: string;
};

export type ComboItemData = {
  name: string;
  upload: string;
  download: string;
  equipment: string;
  television: string;
  suitable: string;
  price: number;
};

export const ComboSelectData: TComboSelect[] = [
  {
    label: "Combo Tiêu Chuẩn",
    type: ComboSelectEnum.STANDARD,
  },
  {
    label: "Combo Game",
    type: ComboSelectEnum.GAME,
  },
  {
    label: "Combo High-class",
    type: ComboSelectEnum.HIGHCLASS,
  },
];

export const StandardComboData: ComboItemData[] = [
  {
    name: "Combo - Giga",
    upload: "150 Mbps",
    download: "150 Mbps",
    equipment: "Wifi 6 thế hệ mới",
    television: "Gần 170 kênh trong nước và quốc tế",
    suitable: "Cá nhân, hộ gia đình",
    price: 260000,
  },
  {
    name: "Combo - Sky",
    upload: "Lên tới 1 Gbps",
    download: "Lên tới 1 Gbps",
    equipment: "Wifi 6 thế hệ mới",
    television: "Gần 170 kênh trong nước và quốc tế",
    suitable: "Cá nhân, hộ gia đình",
    price: 290000,
  },
  {
    name: "Combo - Meta",
    upload: "Lên tới 1 Gbps",
    download: "Lên tới 1 Gbps",
    equipment: "Wifi 6 thế hệ mới",
    television: "Gần 170 kênh trong nước và quốc tế",
    suitable: "Streamer, gamer",
    price: 260000,
  },
];

export const GameComboData: ComboItemData[] = [
  {
    name: "Combo F-Game",
    upload: "500 Mbps",
    download: "500 Mbps",
    equipment: "Wifi 6 thế hệ mới",
    television: "Gần 170 kênh trong nước và quốc tế",
    suitable: "Gamer",
    price: 330000,
  }
];

export const HighclassComboData: ComboItemData[] = [
    {
      name: "Combo - Lux500",
      upload: "500 Mbps",
      download: "500 Mbps",
      equipment: "Wifi 6 thế hệ mới Thiết bị mở rông sóng Gói Ultra Fast",
      television: "Gần 170 kênh trong nước và quốc tế",
      suitable: "High-class",
      price: 875600,
    },
    {
      name: "Combo - Lux800",
      upload: "800 Mbps",
      download: "800 Mbps",
      equipment: "Wifi 6 thế hệ mới Thiết bị mở rông sóng Gói Ultra Fast",
      television: "Gần 170 kênh trong nước và quốc tế",
      suitable: "High-class",
      price: 1075600,
    },
  ];
