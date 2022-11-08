export default function ImageDiv() {
	return (
		<div className="absolute inset-0">
			<img
				className="object-cover w-full h-full"
				src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
				alt=""
			/>
			<div
				className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
				aria-hidden="true"
			/>
		</div>
	);
}
