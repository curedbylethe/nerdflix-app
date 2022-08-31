import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

interface navbar {
  userName: string;
}
export default function NavBar(props: navbar) {
  const [dropDownState, setDropDownState] = useState(false);

  return (
    <div className="fixed top-0 z-50 justify-between w-full bg-gradient-to-b from-white dark:from-gray-700 to-transparent">
      <div className="flex p-5 pl-4 pr-4 md:pl-16 md:pr-16 md:flex-row md:items-center">
        <Logo />
        <NavbarItems />
        <nav className="flex items-start ml-auto">
          <div>
            <Button
              userName={props.userName}
              dropDownState={dropDownState}
              setDropDownState={setDropDownState}
            />
            {/* dropdown */}
            {dropDownState && <DropDown />}
            {/* dropdown */}
          </div>
        </nav>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string,
};

const DropDown = () => {
  return (
    <div className="absolute pt-1 pb-1 pl-1 pr-1 transition border-2 border-solid shadow-md shadow-netflix-red hover:scale-105 bg-slate-800 border-slate-700">
      <div>
        <Link href="/login">
          <a className="block pl-2 pr-2 leading-5 transition duration-200 cursor-pointer hover:underline">
            Sign Out
          </a>
        </Link>
        <div className="pt-2 pb-2 "></div>
      </div>
    </div>
  );
};

const NavbarItems = () => {
  const router = useRouter();
  return (
    <ul className="flex flex-row w-2/4 ml-6 text-sm leading-5 list-none md:ml-6 lg:ml-8">
      <li
        className="mr-2 text-base font-semibold cursor-pointer md:mr-4"
        onClick={(e) => {
          e.preventDefault;
          router.push("/");
        }}
      >
        Home
      </li>
      <li
        className="text-base font-semibold cursor-pointer "
        onClick={(e) => {
          e.preventDefault;
          router.push("/browse/my-list");
        }}
      >
        My List
      </li>
    </ul>
  );
};

const Logo = () => {
  return (
    <div className="w-500">
      <div className="mt-4">
        <Link href="/">
          <a className="flex pl-10 mb-3 align-middle">
            <Image
              src="/nerdflix.png"
              width={250}
              height={50}
              alt="Website Logo"
            ></Image>
          </a>
        </Link>
      </div>
    </div>
  );
};
interface button {
  userName: string;
  dropDownState: boolean;
  setDropDownState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button: React.FC<button> = ({
  userName,
  dropDownState,
  setDropDownState,
}): ReactElement => {
  return (
    <div>
      <button
        className="flex overflow-hidden text-white align-middle"
        onClick={() => {
          dropDownState ? setDropDownState(false) : setDropDownState(true);
        }}
      >
        <p className="text-lg">
          {userName}
          <span className="align-middle material-symbols-outlined">
            expand_more
          </span>
        </p>
      </button>
    </div>
  );
};
