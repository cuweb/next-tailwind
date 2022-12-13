import Panel from "../../_rds-final/layouts/Panel/Panel";

export default function UserDetails() {
	return (
		<Panel hasShadow>
			<div className="flex items-center gap-5 p-5 md:gap-8 md:p-8">
				<img
					className="inline-block w-16 h-16 overflow-hidden text-2xl bg-white border-2 rounded-full cursor-pointer border-cu-black-50 text-cu-black-800 focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2 md:h-32 md:w-32 md:border-4"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt="Avatar of current user"
					aria-hidden="true"
				/>
				<div className="flex flex-col md:gap-1">
					<p className="hidden text-sm font-light text-cu-black-600 md:block">
						Good to see you again
					</p>
					<h2 className="text-xl font-semibold text-cu-black-800 md:text-4xl">
						Carlton Banks
					</h2>
					<p className="text-sm text-cu-black-600 md:text-base">
						Manager at Peacock Stop, UCLA Campus
					</p>
				</div>
			</div>

			<div className="flex gap-2 border-t rounded-bl-lg rounded-br-lg border-cu-black-100 bg-gradient-to-b from-gray-50 to-white">
				<p className="flex-1 p-5 text-sm text-center border-r border-cu-black-100 text-cu-black-600 last:border-0 md:text-base">
					<span className="font-bold text-cu-black-800">12</span>{" "}
					vacation days left
				</p>
				<p className="flex-1 p-5 text-sm text-center border-r border-cu-black-100 text-cu-black-600 last:border-0 md:text-base">
					<span className="font-bold text-cu-black-800">3</span> sick
					days left
				</p>
				<p className="flex-1 hidden p-5 text-sm text-center border-r border-cu-black-100 text-cu-black-600 last:border-0 md:block md:text-base">
					<span className="font-bold text-cu-black-800">2</span>{" "}
					special leave left
				</p>
			</div>
		</Panel>
	);
}
