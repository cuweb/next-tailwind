export default function EventCard(props: any) {
	// const { name, location, dateFull, time } = props;

	return (
		<div
			key="1"
			className="flex flex-col overflow-hidden rounded-lg shadow-lg"
		>
			<div className="flex-shrink-0">
				<img
					className="object-cover w-full h-48"
					src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
					alt=""
				/>
			</div>
			<div className="flex flex-col justify-between flex-1 p-6 bg-white">
				<div className="flex-1">
					<p className="text-sm font-medium text-indigo-600">
						<a href="#" className="hover:underline">
							Case Study
						</a>
					</p>
					<a href="#" className="block mt-2">
						<p className="text-xl font-semibold text-gray-900">
							Improve your customer experience
						</p>
						<p className="mt-3 text-base text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Sint harum rerum voluptatem quo recusandae
							magni placeat saepe molestiae, sed excepturi cumque
							corporis perferendis hic.
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}
