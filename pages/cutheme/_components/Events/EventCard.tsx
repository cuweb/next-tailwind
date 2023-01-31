const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function EventCard() {
	return (
		<div className="not-prose group relative overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
			<a
				href="https://carleton.ca"
				className="relative flex flex-col h-full cursor-pointer"
			>
				<div className="relative">
					<div className="aspect-w-16 aspect-h-9 @sm:md:aspect-h-6">
						<img
							className="object-cover w-full"
							src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"
							alt=""
						/>
					</div>
					<div className="absolute z-10 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md left-6 -bottom-10 group-hover:bg-cu-red">
						<p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
							Sept
						</p>
						<p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">
							16
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-px pt-16 pb-8 px-7">
					<h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
						End-of-Year Reflections and Resolutions for Our Web
						Services Team
					</h3>
					<ul className="flex flex-col gap-2 mt-4">
						<li className="flex items-center text-sm text-cu-black-600 @sm:md:text-base">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							1:48 am-2:45 am
						</li>
						<li className="flex items-center text-sm text-cu-black-600 @sm:md:text-base">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								></path>
							</svg>
							405 Robertson Hall
						</li>
					</ul>
				</div>

				<div className="pb-5 mt-auto px-7">
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Category One
					</p>
					<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
						Category Two
					</p>
				</div>
			</a>
		</div>
	);
}
