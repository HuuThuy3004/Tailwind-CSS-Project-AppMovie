import { useState } from "react";

export interface Item {
  label: string;
  icon: JSX.Element;
  active?: boolean;
}

const NavItem = ({ item }: { item: Item }) => {
  const { label, icon, active } = item;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isShowList, setIsShowList] = useState(false);

  return (
    <li
      className={`flex justify-end items-center gap-2 p-2 cursor-pointer ${
        active ? "bg-white text-black font-bold" : ""
      }`}
    >
      <h3>{label}</h3>
      {icon}
    </li>
  );
};
export default NavItem;
