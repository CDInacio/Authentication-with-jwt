import React from "react";
import { IoMailOpen } from "react-icons/io5";

import Item from "./Item";

const Kanban = () => {
  return (
    <div className="bg-panel w-80 rounded-md">
      <div className="bg-open text-white p-3 rounded-t-md flex items-center justify-between">
        <div className="flex items-center">
          <IoMailOpen size={20} />
          <h3 className="ml-3 font-bold text-lg">Em aberto</h3>
        </div>
        <p>20</p>
      </div>
      <div className="pt-2 px-2">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Kanban;
