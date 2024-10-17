"use client";

import LogoImage from "@/assets/fpt-logo.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const Header = () => {
  return (
    <header className="bg-black fixed top-0 z-40 w-full border-b">
      <div className="px-40 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Image
          src={LogoImage}
          alt="Fpt Telecom"
          height={200}
          width={200}
          className="object-contain h-10"
        />
        <nav className="flex items-center text-background gap-8">
          <Button className="bg-transparent hover:bg-transparent hover:text-orange">
            <span className="font-semibold text-lg">Internet</span>
          </Button>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1.5 hover:text-orange">
                <span className="font-semibold text-lg">Truyền hình</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1.5 hover:text-orange">
                <span className="font-semibold text-lg">Thiết bị</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Button className="bg-transparent hover:bg-transparent hover:text-orange">
            <span className="font-semibold text-lg">Tin tức</span>
          </Button>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1.5 hover:text-orange">
                <span className="font-semibold text-lg">Tiện ich</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </nav>
      </div>
    </header>
  );
};
