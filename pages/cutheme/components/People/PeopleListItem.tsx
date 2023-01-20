import { HeroIcon } from "rds-tailwind";

export default function PeopleListItem() {
	return (
		<li className="relative overflow-hidden duration-300 ease-in not-prose group">
			<a href="https://carleton.ca" className="cursor-pointer">
				<div className="flex items-center gap-4 px-6 py-5">
					<img
						className="flex-none object-cover w-24 h-24 mx-auto border-4 border-white rounded-full shadow-lg"
						src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
						alt=""
					/>

					<div className="flex-1">
						<h3 className="text-lg font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
							Carlton Banks
						</h3>
						<p className="text-base text-cu-black-600">
							Manager, Peacock Stop
						</p>
						<ul className="flex flex-wrap justify-start gap-2 pt-3 text-base">
							<li className="flex-none last:pl-8">
								<a
									href="mailto:webdevs@carleton.ca"
									className="flex items-center gap-2 font-medium text-cyan-700 hover:text-cu-red"
								>
									<HeroIcon
										aria-hidden
										icon="InboxArrowDownIcon"
										size="4"
										isOutline
									/>
									carleton.banks@carlton.ca
								</a>
							</li>
							<li className="flex-none last:pl-8">
								<a
									href="tel:6135202600"
									className="flex items-center gap-2 font-medium text-cyan-700 hover:text-cu-red"
								>
									<HeroIcon
										aria-hidden
										icon="DevicePhoneMobileIcon"
										size="4"
										isOutline
									/>
									613-520-2600 x1234
								</a>
							</li>
						</ul>
					</div>
				</div>
			</a>
		</li>
	);
}
