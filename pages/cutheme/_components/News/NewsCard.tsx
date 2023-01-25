const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function NewsCard() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in bg-white rounded-lg shadow-lg not-prose group hover:scale-105 md:max-w-lg">
			<a href="https://carleton.ca" className="cursor-pointer">
				<img
					className="object-cover w-full"
					src="https://source.unsplash.com/random/400x266"
					alt=""
				/>

				<div className="flex flex-col py-6 space-y-3 px-7">
					<p className="flex items-start text-sm italic text-cu-black-600">
						November 3 - 7
					</p>
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Et ut deserunt ipsum minus.
					</h3>
					<p className="flex items-start text-base text-cu-black-600">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae...
					</p>
					<div className="mt-4">
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category One
						</p>
						<p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
							Category Two
						</p>
					</div>
				</div>
			</a>
		</div>
	);
}
