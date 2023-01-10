import Image from "next/image";

const styles = {
	listGroup: ``,
	listItem: `flex text-white`,
	itemLink: `text-xs text-cu-black-300 hover:text-white`,
};

export default function NewsCard() {
	return (
		<div className="relative flex flex-col overflow-hidden duration-300 ease-in bg-white rounded-lg shadow-lg group hover:scale-105">
			<a href="https://carleton.ca" className="cursor-pointer">
				<Image
					className="object-cover w-full h-48"
					src="https://images.unsplash.com/photo-1664618221700-c741183ff4aa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1074&amp;q=80"
					alt=""
					width="400"
					height="300"
				/>

				<div className="flex flex-col py-6 px-7">
					<h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
						Et ut deserunt ipsum minus.
					</h3>
					<p className="flex items-start text-base text-cu-black-600">
						Faucibus commodo massa rhoncus, volutpat. Dignissim sed
						eget risus enim. Mattis mauris semper sed amet vitae...
					</p>
				</div>
			</a>
		</div>
	);
}
