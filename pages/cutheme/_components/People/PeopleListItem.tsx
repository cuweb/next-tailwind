import { HeroIcon } from "rds-tailwind";

export default function PeopleListItem() {
	return (
		<li className="relative overflow-hidden duration-300 ease-in not-prose group">
			<a href="https://carleton.ca" className="cursor-pointer">
				<div className="flex gap-4 px-6 py-5 sm:items-center">
					<img
						className="flex-none object-cover w-16 h-16 mx-auto border-2 border-white rounded-full shadow-lg sm:h-24 sm:w-24 sm:border-4"
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
						<ul className="flex flex-wrap justify-start gap-12 pt-3 text-base sm:gap-2">
							<li className="last:pl-8 sm:flex-auto">
								<a
									href="mailto:webdevs@carleton.ca"
									className="flex items-center gap-1.5 font-medium text-cyan-700 hover:text-cu-red sm:gap-2"
								>
									<HeroIcon
										aria-hidden
										icon="InboxArrowDownIcon"
										size="5"
										isOutline
									/>
									<span className="sm:hidden">Email</span>
									<span className="hidden sm:block">
										carleton.banksasfasfasfasasfsafsafasffasfas@carlton.ca
									</span>
								</a>
							</li>
							<li className="sm:flex-auto">
								<a
									href="tel:6135202600"
									className="flex items-center gap-1 font-medium text-cyan-700 hover:text-cu-red"
								>
									<HeroIcon
										aria-hidden
										icon="DevicePhoneMobileIcon"
										size="5"
										isOutline
									/>
									<span className="sm:hidden">Call</span>
									<span className="hidden sm:block">
										613-520-2600 x1234
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</a>
		</li>
	);
}
