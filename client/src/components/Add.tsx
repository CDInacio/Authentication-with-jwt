import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";

const Add = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="absolute top-12 left-12 flex items-center ">
      <div
        onClick={() => setShowInput((prev) => !prev)}
        className="h-10 w-10 rounded-full  shadow-lg flex justify-center items-center hover:bg-neutral-100 duration-300 cursor-pointer"
      >
        {!showInput ? <IoMdAdd size={25} /> : <IoMdClose size={25} />}
      </div>
      {showInput ? (
        <div className="w-[250px] ml-5  ">
          <input
            type="text"
            placeholder="Adicione uma terefa"
            className="w-full rounded-md px-3 py-1 border-[2px] border-neutral-300 bg-background  duration-300"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Add;
