export default function NewsCard() {
	return (
		<div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
			<a
				href="https://carleton.ca"
				className="relative flex flex-col h-full cursor-pointer"
			>
				<img
					className="object-cover w-full"
					src="https://source.unsplash.com/random/400x266"
					alt=""
				/>

				<div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
					<p className="flex items-start text-sm italic text-cu-black-600">
						November 3, 2022
					</p>
					<h3 className="text-lg font-semibold text-cu-black duration-300 ease-in group-hover:text-cu-red @sm:md:text-xl">
						End-of-Year Reflections and Resolutions for Our Web
						Services Team
					</h3>
					<p className="flex items-start text-base text-cu-black-600">
						Quis semper vulputate aliquam venenatis egestas sagittis
						quisque orci. Donec commodo sit viverra aliquam
						porttitor ultrices gravida...
					</p>
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
