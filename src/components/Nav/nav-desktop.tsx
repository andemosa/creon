export const NavDesktop = ({
  navItems,
}: {
  navItems: {
    text: string;
    soon: boolean;
  }[];
}) => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {navItems.map(({ soon, text }, index) => (
        <li
          key={index}
          className={`${soon ? "" : "cursor-pointer"} flex gap-1 mx-3`}
        >
          <span className={`${soon ? "" : "hover:text-blue-500"}`}>{text}</span>
          {soon && (
            <span className="text-[10px] text-[#AB23FF] flex items-center bg-black h-[15px] w-8 rounded-full justify-center align-middle">
              Soon
            </span>
          )}
        </li>
      ))}

      <button className="flex border-2 justify-center items-center rounded-md px-4 py-2 cursor-pointer hover:bg-blue-500 hover:border-blue-500 hover:text-white">
        Connect
      </button>
    </ul>
  );
};
