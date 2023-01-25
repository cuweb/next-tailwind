export default function EventCard() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in rounded-lg shadow-lg not-prose group hover:scale-105 md:max-w-lg">
			<a href="https://carleton.ca" className="cursor-pointer ">
				<div className="absolute px-6 top-48">
					<div className="flex-none w-16 md:w-20">
						<div className="flex flex-col justify-center flex-none w-auto h-16 text-center duration-300 ease-in transform -translate-y-1/2 rounded-lg shadow bg-gray-50 group-hover:bg-cu-red md:h-20">
							<p className="text-xs font-bold uppercase duration-300 ease-in text-cu-red group-hover:text-white">
								Nov
							</p>
							<p className="text-2xl font-bold uppercase duration-300 ease-in text-cu-black-800 group-hover:text-white">
								16
							</p>
						</div>
					</div>
				</div>
				<div>
					<img
						className="object-cover w-full h-48"
						src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80"
						alt=""
					/>
				</div>
				<div className="bg-white p-7">
					<div className="mt-8">
						<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
							Lived Experience Luncheon Series with Dr. Alex
							Auerbach
						</h3>
						<ul className="flex flex-col gap-3 mt-4">
							<li className="flex items-start text-sm text-cu-black-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								1:48 am-2:45 am
							</li>
							<li className="flex items-start text-sm text-cu-black-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
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
						<div className="mt-4">
							<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
								Category One
							</p>
							<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
								Category Two
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
