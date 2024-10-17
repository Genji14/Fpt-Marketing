"use client";

import LogoImage from "@/assets/fpt-logo.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Notice } from "./Notice";

export const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="px-40 flex h-12 items-center space-x-4 sm:justify-between sm:space-x-0 bg-black">
        <Image
          src={LogoImage}
          alt="Fpt Telecom"
          height={200}
          width={200}
          className="object-contain h-8"
        />
        <nav className="flex items-center text-background gap-6">
          <Button className="bg-transparent hover:bg-transparent hover:text-orange">
            <span className="font-semibold text-sm">Internet</span>
          </Button>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1 hover:text-orange">
                <span className="font-semibold text-sm">Truyền hình</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1 hover:text-orange">
                <span className="font-semibold text-sm">Thiết bị</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Button className="bg-transparent hover:bg-transparent hover:text-orange">
            <span className="font-semibold text-sm">Tin tức</span>
          </Button>
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center space-x-1 hover:text-orange">
                <span className="font-semibold text-sm">Tiện ich</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </nav>
      </div>
      <Notice />
    </header>
  );
};
