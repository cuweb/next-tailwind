import Image from "next/image";
import Panel from "../../_rds-final/layouts/Panel/Panel";

export default function UserDetails() {
	return (
		<Panel hasBorder hasShadow>
			<div className="not-prose flex items-center gap-5 p-5 md:gap-8 md:p-8">
				<img
					className="inline-block h-32 w-32 cursor-pointer overflow-hidden rounded-lg bg-white text-4xl text-cu-black-800 focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt="Avatar of current user"
					aria-hidden="true"
					width="40"
					height="40"
				/>
				<div className="flex flex-col md:gap-2">
					<p className="hidden text-sm font-light text-cu-black-600 md:block md:text-base">
						Good to see you again
					</p>
					<h2 className="text-xl font-semibold text-cu-black-800 md:text-4xl">
						Carlton Banks
					</h2>
					<p className="text-base text-cu-black-600 md:text-lg">
						Manager at Peacock Stop, UCLA Campus
					</p>
				</div>
			</div>

			<div className="not-prose flex gap-2 rounded-bl-lg rounded-br-lg border-t border-cu-black-100 bg-gradient-to-b from-gray-50 to-white">
				<p className="flex-1 border-r border-cu-black-100 p-5 text-center text-sm font-light text-cu-black-600 last:border-0 md:text-base">
					<span className="font-semibold text-cu-black-800">12</span>{" "}
					vacay days left
				</p>
				<p className="flex-1 border-r border-cu-black-100 p-5 text-center text-sm font-light text-cu-black-600 last:border-0 md:text-base">
					<span className="font-semibold text-cu-black-800">3</span>{" "}
					sick days left
				</p>
				<p className="hidden flex-1 border-r border-cu-black-100 p-5 text-center text-sm font-light text-cu-black-600 last:border-0 md:block md:text-base">
					<span className="font-semibold text-cu-black-800">2</span>{" "}
					special days left
				</p>
			</div>
		</Panel>
	);
}
