const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function NewsListItem() {
	return (
		// <div className="relative flex flex-col overflow-hidden bg-white not-prose group">
		<div className="relative overflow-hidden not-prose group">
			<a
				href="https://carleton.ca"
				className="@container group relative flex cursor-pointer gap-4 p-6 hover:bg-slate-50 focus:outline-none md:gap-8"
			>
				<div className="@lg:md:block hidden max-w-[30%] flex-none">
					<img
						className="object-cover w-full rounded-md"
						src="https://source.unsplash.com/random/400x300"
						alt=""
					/>
				</div>

				<div className="@lg:pt-1.5 flex flex-1 flex-col gap-2.5 pr-6">
					<p className="mr-4 text-sm italic text-cu-black-700">
						January 7, 2020
					</p>
					<h3 className="@lg:md:text-3xl text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl">
						News item title
					</h3>
					<p className="@lg:md:text-lg text-sm text-cu-black-900 md:text-base">
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

				<div className="absolute top-1/2 right-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						className="flex-none w-5 h-5 ml-auto text-cu-black-300 group-hover:text-cu-red"
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
