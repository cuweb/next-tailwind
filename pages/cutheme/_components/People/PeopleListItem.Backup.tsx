export default function PeopleListItem() {
	return (
		<div className="not-prose group relative overflow-hidden @container">
			<a
				href="https://carleton.ca"
				className="group cursor-pointer flex-col  bg-white p-6 hover:bg-slate-50 focus:outline-none md:gap-8 @md:md:flex @lg:md:flex-row"
			>
				<div className="h-32 w-32 @lg:md:h-60 @lg:md:w-60">
					<img
						className="object-cover w-full overflow-hidden border-4 border-white rounded-lg shadow-md"
						src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
						alt=""
					/>
				</div>

				<div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-2.5 @lg:md:pt-1.5">
					<h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl @lg:md:text-2xl">
						Carlton Banks (Alfonso Ribeiro)
					</h3>
					<p className="text-base text-cu-black-600 @lg:md:text-lg">
						Manager, Peacock Stop
					</p>
					<ul className="pt-2 space-y-2">
						<li className="text-sm  @sm:md:text-base">
							<a
								href="mailto:webdevs@carleton.ca"
								className="font-semibold text-cyan-700 hover:text-cu-red"
							>
								george.hadjisophocleous@carleton.ca
							</a>
						</li>
						<li className="items-center text-sm text-cu-black-600 hover:text-cu-red @sm:md:text-base">
							<a href="#" className="">
								613-520-2600 x1234
							</a>
						</li>
					</ul>
					<div className="mt-auto">
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category One
						</p>
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category Two
						</p>
					</div>
				</div>

				<div className="absolute -mt-3 top-1/2 right-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						className="flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						></path>
					</svg>
				</div>
			</a>
		</div>
	);
}
