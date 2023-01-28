export default function NumberCardCenter() {
	// let twColors = [
	// 	"border-l-slate-500",
	// 	"border-l-red-500",
	// 	"border-l-orange-300",
	// 	"border-l-amber-300",
	// 	"border-l-lime-400",
	// 	"border-l-teal-400",
	// 	"border-l-cyan-400",
	// 	"border-l-blue-400",
	// ];
	// let color = twColors[Math.floor(Math.random() * twColors.length)];

	return (
		<div className="relative flex flex-col gap-2 px-6 py-5 text-center bg-white border border-l-8 rounded-lg shadow-lg not-prose border-cu-black-100 border-l-blue-400 md:max-w-lg">
			<h3 className="text-sm font-light text-cu-black-600 md:text-base">
				Carleton Alumni
			</h3>
			<p className="text-3xl font-semibold text-cu-black-800 md:text-4xl">
				177,000+
			</p>
		</div>
	);
}
