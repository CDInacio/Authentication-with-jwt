import React from "react";
import { IoTodayOutline } from "react-icons/io5";

const Item = () => {
  return (
    <div className="bg-card rounded-md p-3 mb-2">
      <div className="flex justify-between items-center text-slate-400 text-sm">
        <span className="  ">Cláudio Dantas</span>
        <span className="flex items-center">
          <IoTodayOutline className="mr-1" />
          14/04/2023
        </span>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat
        autem id? Qui magnam eveniet inventore suscipit maxime laborum repellat.
      </p>
    </div>
  );
};

export default Item;
