import Image from "next/image";
import { icons } from "../constant/images";
import { ErrorMessageProps } from "../types/props";

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="word-expand mb-4 flex w-full items-center justify-center rounded border-2 border-red-600 px-2 py-1 text-red-600">
      <Image src={icons.error} alt="error-icon" className="mr-2 h-5 w-5" />
      <span className="">{error}</span>
    </div>
  );
};

export default ErrorMessage;
