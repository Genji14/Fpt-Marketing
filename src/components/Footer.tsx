import FooterLogo from "@/assets/fpt-logo-color.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Mail, Navigation, Phone, UserRound } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      <div className="bg-gray">
        <div className="w-full h-full px-40 py-16 grid grid-cols-10 gap-2 items-center">
          <div className="col-span-3 flex items-center justify-center py-4">
            <Image
              src={FooterLogo}
              alt="Fpt Telecom"
              height={1000}
              width={1000}
              className="object-contain w-40"
            />
          </div>
          <div className="col-span-7 flex items-center gap-10"></div>
          <div className="col-span-3 flex items-center justify-center rounded-lg bg-black h-full">
            <div className="flex flex-col space-y-2.5 w-full h-full p-6">
              <h1 className="font-bold text-lg text-white">
                Công ty Cổ phần Viễn thông FPT
              </h1>
              <Separator className="bg-[#ffffff4d]" />
              <div className="flex items-center gap-4 text-white py-[1px]">
                <Navigation />
                <div className="text-xs font-semibold leading-snug">
                  <h3>Tầng 9, Block A, FPT Tower</h3>
                  <h3>10 Phạm Văn Bạch, Cầu Giấy, Hà Nội </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white py-[1px]">
                <Mail />
                <h3 className="text-xs font-semibold">hotrokhachhang@fpt.com</h3>
              </div>
              <div className="flex items-center gap-4 text-white py-[1px]">
                <Phone />
                <h3 className="text-xs font-semibold">024 7300 2222</h3>
              </div>
              <div className="flex items-center gap-4 text-white py-[1px]">
                <UserRound />
                <h3 className="text-xs font-semibold">Người đại diện: Ông Hoàng Việt Anh</h3>
              </div>
            </div>
          </div>
          <div className="col-span-7 flex items-center justify-center rounded-lg bg-black">
            <div className="grid grid-cols-4 gap-1 w-full">
              <div className="flex flex-col space-y-2.5 w-full h-full p-6">
                <h1 className="font-bold text-lg text-white">Về FPT Telecom</h1>
                <Separator className="bg-[#ffffff4d]" />
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Giới thiệu chung
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Liên kết Thành viên
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Khách hàng Đối tác
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Tuyển dụng
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Quan hệ cổ đông
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Tập đoàn FPT
                </Link>
              </div>
              <div className="flex flex-col space-y-2 w-full h-full p-6">
                <h1 className="font-bold text-lg text-white">Hỗ trợ</h1>
                <Separator className="bg-[#ffffff4d]" />
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Thông tin
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Kỹ thuật
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Liên hệ 24/7
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  HDSD Dịch vụ
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Giới thiệu bạn bè
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Phản hồi Khách hàng
                </Link>
              </div>
              <div className="flex flex-col space-y-2 w-full h-full p-6">
                <h1 className="font-bold text-lg text-white">Tiện ích</h1>
                <Separator className="bg-[#ffffff4d]" />
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Đăng ký dịch vụ
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Ứng dụng HiFPT
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Sản phẩm dịch vụ
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Điểm giao dịch
                </Link>
              </div>
              <div className="flex flex-col space-y-2 w-full h-full p-6">
                <h1 className="font-bold text-lg text-white">Điều khoản</h1>
                <Separator className="bg-[#ffffff4d]" />
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Bảo mật
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Hướng dẫn sử dụng
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Bảo hành
                </Link>
                <Link
                  href="/"
                  className="text-[#fff9] hover:text-orange text-xs font-normal"
                >
                  Khôi phục dịch vụ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-10"></div>
    </footer>
  );
};
