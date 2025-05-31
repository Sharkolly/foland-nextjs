import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

type CustomArrowProps = {
    next?: () => void;
    previous?: () => void;
  }

const CustomButtonGroup: React.FC<CustomArrowProps>  = ({ next, previous }) => {
  return (
    <div className="absolute top-1/2 w-full flex justify-between px-4 -translate-y-1/2">
      <button
        onClick={previous}
        className="p-2 bg-gray-200 rounded-full shadow"
      >
        <FaChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button onClick={next} className="p-2 bg-gray-200 rounded-full shadow">
        <FaChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default CustomButtonGroup;
