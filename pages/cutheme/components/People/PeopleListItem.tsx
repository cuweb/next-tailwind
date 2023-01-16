export default function PeopleListItem() {
	return (
		<div className="relative overflow-hidden duration-300 ease-in not-prose group hover:scale-105">
			<a
				href="https://carleton.ca"
				className="flex gap-5 space-y-5 cursor-pointer"
			>
				<img
					className="flex-none object-cover w-24 h-24 mx-auto border-4 border-white rounded-full shadow-lg"
					src="https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg"
					alt=""
				/>

				<div className="flex-1 space-y-1">
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Carlton Banks
					</h3>
					<p className="text-base text-cu-black-600">
						Manager, Peacock Stop
					</p>
				</div>
			</a>
		</div>
	);
}
