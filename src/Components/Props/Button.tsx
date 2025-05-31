import { buttonPropsType } from "@/Types/props.types";

const Button = ({ children }: buttonPropsType) => {
  return (
    <button className="bg-navy-blue text-white px-5 py-2 max-md:py-4 rounded-md">
      {children}
    </button>
  );
};

export default Button;
