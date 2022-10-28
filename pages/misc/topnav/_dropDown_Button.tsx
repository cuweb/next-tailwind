import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import React from "react";

export default function DropDownButton() {
	return (
		<>
			{/* Button
			<ChevronDownIcon className="w-5 h-5 -mr-2" aria-hidden="true" /> */}

			<button
				type="button"
				aria-label="Button has Shadows"
				className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
			>
				Button has Shadows
			</button>
		</>
	);
}
