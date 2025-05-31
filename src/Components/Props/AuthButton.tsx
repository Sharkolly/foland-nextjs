import { buttonPropsType } from "@/Types/props.types";

const Button = ({ children, isFetching }: buttonPropsType) => {
  return (
    <button
    disabled={isFetching ? true : false}
      className={`${
        isFetching ? "opacity-[.6]" : ""
      } cursor-pointer w-full hover:opacity-[.8] font-bold bg-navy-blue text-white px-8 pointer rounded-lg py-2.5`}
    >
      {children}
    </button>
  );
};

export default Button;
