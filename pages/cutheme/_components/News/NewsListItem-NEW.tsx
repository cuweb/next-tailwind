const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function NewsListItemNew() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in bg-white rounded-md shadow-md not-prose group">
			<a
				href="https://carleton.ca"
				className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
			>
				<div className="flex items-start gap-4">
					{/* <div className="flex-none hidden w-20 md:w-32 lg:block">
							<img
								className="w-auto h-auto rounded"
								src="https://source.unsplash.com/random/400x300"
								alt=""
							/>
						</div> */}
					<div className="flex flex-col flex-auto gap-2">
						<h3 className="text-base font-semibold text-cu-black group-hover:text-cu-red md:text-base">
							News item title
						</h3>
						<p className="mr-4 text-sm italic text-cu-black-700">
							January 7, 2020
						</p>
						<p className="text-base text-cu-black-900">
							Tenetur libero voluptatem rerum occaecati qui est
							molestiae exercitationem. Voluptate quisquam iure
							assumenda consequatur ex et recusandae.
						</p>
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					className="flex-none w-5 h-5 ml-auto text-cu-black-300"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					></path>
				</svg>
			</a>
		</div>
	);
}
