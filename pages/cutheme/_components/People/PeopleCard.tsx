export default function PeopleCard() {
	return (
		<div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white py-8 px-7 shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
			<a
				href="https://carleton.ca"
				className="relative flex flex-col h-full cursor-pointer"
			>
				<img
					className="mx-auto h-48 w-48 rounded-full border-4 border-white object-cover group-hover:shadow-md group-hover:duration-300 group-hover:ease-in @sm:md:h-60 @sm:md:w-60"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt=""
				/>

				<div className="flex flex-col items-center space-y-0.5 py-6 px-7">
					<h3 className="text-lg font-semibold text-cu-black  group-hover:text-cu-red @xs:md:text-2xl">
						Carlton Banks
					</h3>
					<p className="text-sm italic text-cu-black-600 @sm:md:text-lg">
						Manager, Peacock Stop
					</p>
					<ul className="pt-3 space-y-1 text-center">
						<li className="text-sm text-cyan-700 hover:text-cu-red @lg:md:text-base">
							<a
								href="mailto:webdevs@carleton.ca"
								className="font-semibold text-cyan-700 hover:text-cu-red"
							>
								george.hadjisophocleous@carleton.ca
							</a>
						</li>
						<li className="text-sm text-cu-black-600 hover:text-cu-red @lg:md:text-base">
							<a href="#" className="">
								613-520-2600 x1234
							</a>
						</li>
					</ul>
				</div>

				<div className="mx-auto mt-auto">
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Tom Jones Love
					</p>
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Dance Superstar
					</p>
				</div>
			</a>
		</div>
	);
}
