const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function PeopleCard() {
	return (
		<div className="not-prose group relative flex flex-col overflow-hidden duration-300 ease-in @container hover:scale-105 md:max-w-lg">
			<a
				href="https://carleton.ca"
				className="relative flex flex-col h-full cursor-pointer"
			>
				<img
					className="object-cover mx-auto border-4 border-white rounded-full h-60 w-60 group-hover:shadow-md group-hover:duration-300 group-hover:ease-in"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt=""
				/>

				<div className="flex flex-col items-center py-6 space-y-2 px-7">
					<h3 className="text-lg font-semibold text-cu-black duration-300 ease-in group-hover:text-cu-red @sm:md:text-2xl">
						Carlton Banks
					</h3>
					<p className="flex text-base text-cu-black-600 @sm:md:text-lg">
						Manager, Peacock Stop
					</p>
					<ul className="pt-2 space-y-2 text-center">
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
				</div>

				<div className="pb-5 mx-auto mt-auto px-7">
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
