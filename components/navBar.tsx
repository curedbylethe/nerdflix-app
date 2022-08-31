import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactElement, useState } from "react";
import { useRouter } from "next/router";

interface navbar {
  userName: string;
}
export default function NavBar(props: navbar) {
  return (
    <div className="fixed top-0 z-50 justify-between w-full bg-gradient-to-b from-white dark:from-gray-700 to-transparent">
      <div className="flex p-5 pl-4 pr-4 md:pl-16 md:pr-16 md:flex-row md:items-center">
        <Logo />
        <NavbarItems />
        <nav className="flex items-start ml-auto">
          <div>
            <DropDown userName={props.userName} />
          </div>
        </nav>
      </div>
    </div>
  );
}
NavBar.propTypes = {
  userName: PropTypes.string,
};

const DropDown = (props) => {
  const [dropDownState, setDropDownState] = useState(false);

  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-link rounded-btn">
        <Button
          userName={props.userName}
          dropDownState={dropDownState}
          setDropDownState={setDropDownState}
        />
      </label>
      {dropDownState && (
        <div>
          <ul
            tabindex="0"
            class="menu dropdown-content p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52 mt-4"
          >
            <li>
              <Link href="/login">
                <a>Sign out</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
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
        className="flex overflow-hidden text-black align-middle dark:text-white"
        onClick={() => {
          !dropDownState ? setDropDownState(true) : setDropDownState(false);
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
