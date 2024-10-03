import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-between items-center bg-green-300 py-5 px-20">
      <h1 className="text-3xl">NETWORK CALL PRACTICE</h1>
      <div className="px-20 flex justify-center gap-10">
        <a className="p-5 bg-blue-300 rounded-lg" href="/">
          Users
        </a>
        <a className="p-5 bg-blue-300 rounded-lg" href="/register">
          Register
        </a>
      </div>
    </div>
  );
};
export default Header;
