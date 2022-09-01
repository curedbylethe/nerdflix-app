interface button {
  userName: string;
  dropDownState: boolean;
  setDropDownState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button: React.FC<button> = ({
  userName,
  dropDownState,
  setDropDownState,
}): JSX.Element => {
  return (
    <div>
      <button
        className="flex overflow-hidden text-black align-middle dark:text-white btn btn-link"
        onClick={() => {
          !dropDownState ? setDropDownState(true) : setDropDownState(false);
        }}
      >
        <p className="flex-row sm:text-sm lg:text-lg whitespace-nowrap md:text-lg ">
          {userName}
          <span className="align-middle material-symbols-outlined">
            expand_more
          </span>
        </p>
      </button>
    </div>
  );
};

export default Button;
