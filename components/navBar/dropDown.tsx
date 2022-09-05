import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "./button";

interface dropdown {
  userName: string;
}

const DropDown: React.FC<dropdown> = ({ userName }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const router = useRouter();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-link rounded-btn">
        <Button
          userName={userName}
          dropDownState={dropDownState}
          setDropDownState={setDropDownState}
        />
      </label>
      {dropDownState && (
        <div>
          <ul
            tabIndex={0}
            className="p-2 mt-4 shadow menu dropdown-content bg-base-100 dark:bg-slate-800 rounded-box w-52"
          >
            <li className="lg:text-base md:text-base dark:hover:bg-slate-700 sm:text-sm">
              <Link href="/login">
                <a>Sign out</a>
              </Link>
            </li>
            <li
              className="lg:text-base md:text-base dark:hover:bg-slate-700 sm:text-sm"
              onClick={(e) => {
                e.preventDefault;
                router.push("/browse/my-list");
              }}
            >
              <a>My List</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
