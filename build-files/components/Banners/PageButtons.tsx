export default function BannerWithButtons({ children }: any) {
	return (
		<header className="shadow bg-cu-black-50">
			<div className="flex items-start px-6 pt-8 mx-auto max-w-7xl md:items-center md:pt-12 lg:px-8">
				<div className="flex-1 min-w-0">
					<h1 className="text-3xl font-medium text-cu-black-800 sm:truncate md:text-4xl">
						Single Event Title
					</h1>
				</div>
				<div className="flex mt-4 md:mt-0 md:ml-4">
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm text-cu-black-800 hover:bg-cu-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Add Event
					</button>
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cu-red hover:bg-cu-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Register Now
					</button>
				</div>
			</div>
		</header>
	);
}
