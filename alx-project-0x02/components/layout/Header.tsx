import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div className="grid px-4 py-2 h-[10rem] bg-blue-500">
        <div className="flex  justify-end items-center">
          <nav>
            <ul className="flex">
              <li className="mx-2">
                <Link href="/">Landing</Link>
              </li>
              <li className="mx-2">
                <Link href="/home">Home</Link>
              </li>
              <li className="mx-2">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <h1 className="text-[2rem]">
            SoloForge: Mastering Project Autonomy
          </h1>
        </div>
      </div>
    </>
  );
};
export default Header;
