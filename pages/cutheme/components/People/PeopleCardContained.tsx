export default function PeopleCardContained() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in bg-white rounded-lg shadow-lg group hover:scale-105">
			<a
				href="https://carleton.ca"
				className="py-6 space-y-5 cursor-pointer"
			>
				<img
					className="object-cover w-48 h-48 mx-auto border-4 border-white rounded-full shadow-lg xl:h-48 xl:w-48"
					src="https://source.unsplash.com/random/300x300"
					alt=""
				/>

				<div className="flex flex-col space-y-1 text-center px-7">
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Troy Chaplin
					</h3>
					<p className="text-base text-cu-black-600">
						Senior Web Developer
					</p>
				</div>
			</a>
		</div>
	);
}
