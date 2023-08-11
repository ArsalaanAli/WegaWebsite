import React from "react";
import { Collapse } from "react-collapse";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="flex cursor-pointer items-center justify-between  py-[25px] px-[50px]"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold text-white"> {title} </p>
        <div className="text-[30px]">
          {open ? (
            <AiOutlineMinusCircle className="fill-white" />
          ) : (
            <AiFillPlusCircle className="fill-white" />
          )}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="px-[50px] pb-[20px] text-white"> {description} </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
