import { ComboItemData } from "@/constants";
import { cn } from "@/lib/utils";
import {
    DownloadCloud,
    PlayCircle,
    Rss,
    ShoppingCart,
    ThumbsUp,
    UploadCloud
} from "lucide-react";
import { ReactNode } from "react";

export const ComboItem = ({ item }: { item: ComboItemData }) => {
  return (
    <div className="flex flex-col gap-2 bg-white/90 rounded-xl px-8 py-6 shadow-lg backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
      <Section
        icon={<DownloadCloud className="w-5 h-5" />}
        title="Download"
        content={item.download}
      />
      <Section
        icon={<UploadCloud className="w-5 h-5" />}
        title="Upload"
        content={item.upload}
      />
      <Section
        icon={<Rss className="w-5 h-5" />}
        title="Trang bị"
        content={item.equipment}
      />
      <Section
        icon={<PlayCircle className="w-5 h-5" />}
        title="Truyền hình"
        content={item.television}
      />
      <Section
        icon={<ThumbsUp className="w-5 h-5" />}
        title="Download"
        content={item.suitable}
        isLast
      />

      <div className="flex items-center justify-between mt-auto bg-white rounded-lg w-fit overflow-hidden">
        <h3 className="text-sm flex-auto text-center font-semibold text-slate-400 px-6 py-2.5">
          {item.price.toLocaleString("vi-VI")}
          <span className="text-xs"> đ/tháng</span>
        </h3>
        <div className="bg-orange/40 h-full flex items-center justify-center p-2 aspect-square">
          <ShoppingCart className="text-white h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

const Section = ({
  icon,
  title,
  content,
  isLast,
}: {
  icon: ReactNode;
  title: string;
  content: string;
  isLast?: boolean;
}) => (
  <div
    className={cn(
      "flex items-center justify-between w-full py-1",
      !isLast && "border-b border-black"
    )}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs font-semibold">{title}</span>
    </div>
    <h3 className="text-[10px] font-medium text-right w-1/2">{content}</h3>
  </div>
);
