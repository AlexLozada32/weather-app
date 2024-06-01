import Image from "next/image";
import { icons } from "../constant/images";

const ConvertButton = ({ handleClick, change }: any) => {
  return (
    <div className="container-tooltip">
      <button
        onClick={handleClick}
        className="hover-rotate flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 transition-opacity hover:bg-blue-700 active:bg-blue-800"
      >
        <Image src={icons.rotate} alt="change" className="h-4 w-4" />
      </button>
      <div className="tooltip -bottom-[3px] left-8 w-44 rounded-md bg-blue-700 px-2 py-1 text-center text-white">
        Change {change} units
      </div>
    </div>
  );
};

export default ConvertButton;
