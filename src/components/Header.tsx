"use client";

import LogoImage from "@/assets/fpt-logo.png";
import { headerItemsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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
        <nav className="flex items-center text-background gap-4">
          {headerItemsData.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                className="
                  rounded-none bg-transparent relative
                  hover:bg-transparent hover:text-orange  
                  after:absolute after:-bottom-1 after:w-0 after:bg-orange after:h-[3px] after:transition-all
                  hover:after:w-full  
                "
              >
                <span className="font-semibold text-sm">{item.title}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
