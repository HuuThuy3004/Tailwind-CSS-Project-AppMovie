import { useState } from "react";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShowList, setIsShowList] = useState(false);

  return (
    <nav className="col-span-1 bg-black text-white">
      <div className="mx-4">
        <h4 className="font-bold text-right border-b py-4 uppercase">
          PhimMoizz.net
        </h4>
      </div>
      <ul className="mx-4 my-2 text-right">
        <li className="flex justify-end items-center gap-2 p-2 cursor-pointer bg-white text-black font-bold">
          <h3>Trang chủ</h3>
          <i className="fa-solid fa-house text-[22px]"></i>
        </li>

        {/* Phim bộ - Dropdown */}
        <li>
          <div
            className="flex justify-end items-center gap-2 cursor-pointer p-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <h3>Phim bộ</h3>
            <i
              className={`fa-solid fa-chevron-${
                isDropdownOpen ? "up" : "down"
              }`}
            ></i>
          </div>
          {isDropdownOpen && (
            <ul className="ml-4 border-l border-gray-400 pl-2 space-y-2 transition-all">
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                Phim Hàn Quốc
                <i className="fa-solid fa-film"></i>
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                Phim Trung Quốc
                <i className="fa-solid fa-film"></i>
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                Phim Âu-Mỹ
                <i className="fa-solid fa-film"></i>
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                Phim Việt Nam
                <i className="fa-solid fa-film"></i>
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                Phim Đài loan
                <i className="fa-solid fa-film"></i>
              </li>
            </ul>
          )}
        </li>
        <li className="flex justify-end items-center gap-2 p-2">
          <h3>Giới thiệu</h3>
          <i className="fa-solid fa-circle-info"></i>
        </li>
        <li>
          <div
            className="flex justify-end items-center gap-2 p-2 cursor-pointer"
            onClick={() => setIsShowList(!isShowList)}
          >
            <h3>Thể loại</h3>
            {isShowList ? (
              <i className="fa-solid fa-bars-staggered"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
          {isShowList && (
            <ul className="ml-4 border-l border-gray-400 pl-2 space-y-2 transition-all">
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-torii-gate"></i>
                Cổ trang
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-heart-pulse"></i>
                Tình cảm
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-regular fa-face-grin-squint"></i>
                Hài hước
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-user-ninja"></i>
                Võ thuật
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-podcast"></i>
                Tâm Lý
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-person-running"></i>
                Thể thao
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-flask-vial"></i>
                Khoa học
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-music"></i>
                Âm nhạc
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-book"></i>
                Lịch sử
              </li>
              <li className="flex justify-end items-center gap-2 p-2 cursor-pointer hover:bg-gray-700">
                <i className="fa-solid fa-dragon"></i>
                Thần thoại
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
