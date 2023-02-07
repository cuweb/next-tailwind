export default function EventListItem() {
	return (
		<div className="not-prose group relative overflow-hidden @container">
			<a
				href="https://carleton.ca"
				className="group relative flex cursor-pointer flex-col gap-6 bg-white p-6 hover:bg-slate-50 focus:outline-none @xl:lg:flex-row @2xl:lg:gap-8"
			>
				<div className="relative max-w-[40%]">
					<img
						className="hidden w-full rounded-md object-cover @2xl:lg:block"
						src="https://source.unsplash.com/random/496x279"
						alt=""
					/>
					<div className="flex h-20 w-20 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red @2xl:lg:hidden">
						<p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
							Sept
						</p>
						<p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">
							16
						</p>
					</div>
				</div>

				<div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5 @lg:md:pt-1.5">
					<h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @2xl:lg:text-2xl">
						Psychology Colloquium Talk: Science and Imagination in
						Childhood and Beyond
					</h3>
					<ul className="flex flex-col flex-wrap gap-2 md:flex-row @lg:md:flex-col">
						<li className="flex items-center text-sm text-cu-black-700 @2xl:lg:text-base">
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
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
								></path>
							</svg>
							Thursday, February 16, 2023
						</li>
						<li className="flex items-start text-sm text-cu-black-700 @2xl:lg:text-base">
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
							SA 304 Southam Hall, 1125 Colonel By Dr, Ottawa, ON
						</li>
					</ul>
					{/* <p className="text-sm text-cu-black-900 md:text-base @lg:md:text-lg">
						Tenetur libero voluptatem rerum occaecati qui est
						molestiae exercitationem. Voluptate quisquam iure
						assumenda consequatur ex et recusandae dignissim sodales
						feugiat...{" "}
						<span className="font-semibold text-cu-red group-hover:text-cyan-700">
							Read more
						</span>
					</p> */}
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
