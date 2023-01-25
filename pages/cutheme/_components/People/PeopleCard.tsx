import { HeroIcon } from "rds-tailwind";

export default function PeopleCard() {
	return (
		<div className="relative overflow-hidden duration-300 ease-in bg-white rounded-lg shadow-lg not-prose group hover:scale-105">
			<a href="https://carleton.ca" className="cursor-pointer">
				<img
					className="object-cover w-40 h-40 mx-auto my-8 border-4 border-white rounded-full shadow-lg"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt=""
				/>
				<div className="flex flex-col gap-1 mb-8 text-center">
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Carlton Banks
					</h3>
					<p className="text-base text-cu-black-600">
						Manager, Peacock Stop
					</p>
				</div>
				<ul className="flex justify-around text-base text-center border-t divide-x divide-cu-black-100 border-cu-black-100">
					<li className="flex-auto">
						<a
							href="mailto:webdevs@carleton.ca"
							className="flex items-center justify-center gap-2 p-3 font-medium text-cyan-700 hover:bg-cu-red hover:text-white"
						>
							<HeroIcon
								aria-hidden
								icon="InboxArrowDownIcon"
								size="5"
								isOutline
							/>
							Email
						</a>
					</li>
					<li className="flex-auto">
						<a
							href="tel:6135202600"
							className="flex items-center justify-center gap-2 p-3 font-medium text-cyan-700 hover:bg-cu-red hover:text-white"
						>
							<HeroIcon
								aria-hidden
								icon="DevicePhoneMobileIcon"
								size="5"
								isOutline
							/>
							Call
						</a>
					</li>
				</ul>
			</a>
		</div>
	);
}
