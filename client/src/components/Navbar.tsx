import type { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="navbar w-full bg-stone-800 p-2 font-bold text-white">
      <span className="uppercase">BotFriends</span>{" "}
      <span className="capitalize">Coding Challenge</span>
    </nav>
  );
};
export default Navbar;
