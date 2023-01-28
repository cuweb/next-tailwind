const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function NewsListItem() {
	return (
		<div className="not-prose group relative overflow-hidden @container">
			<a
				href="https://carleton.ca"
				className="group relative flex cursor-pointer flex-col gap-4 bg-white p-6 hover:bg-slate-50 focus:outline-none @lg:md:flex-row @lg:md:gap-8"
			>
				<div className="hidden max-w-[30%] flex-none @lg:md:block">
					<img
						className="object-cover w-full rounded-md"
						src="https://source.unsplash.com/random/400x300"
						alt=""
					/>
				</div>

				<div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-2.5 @lg:md:pt-1.5">
					<p className="text-sm italic text-cu-black-600">
						January 7, 2020
					</p>
					<h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl @lg:md:text-2xl">
						News item title
					</h3>
					<p className="text-sm text-cu-black-900 md:text-base @lg:md:text-lg">
						Tenetur libero voluptatem rerum occaecati qui est
						molestiae exercitationem. Voluptate quisquam iure
						assumenda consequatur ex et recusandae dignissim sodales
						feugiat...{" "}
						<span className="font-semibold text-cu-red group-hover:text-cyan-700">
							Read more
						</span>
					</p>
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
