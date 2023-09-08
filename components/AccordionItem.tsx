import React from "react";
import { Collapse } from "react-collapse";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

interface AccordionItemProps {
	open: boolean;
	toggle: () => void;
	title: string;
	description: any;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
	open,
	toggle,
	title,
	description,
}) => {
	return (
		<div className="pt-[10px]">
			<div
				className="flex cursor-pointer items-center justify-between  py-[25px] px-[50px]"
				onClick={toggle}
			>
				<p className="text-[22px] font-semibold"> {title} </p>
				<div className="text-[30px]">
					{open ? <AiOutlineMinusCircle /> : <AiFillPlusCircle />}
				</div>
			</div>

			<Collapse isOpened={open}>
				<div className="px-[50px] pb-[20px]"> {description} </div>
			</Collapse>
		</div>
	);
};

export default AccordionItem;
