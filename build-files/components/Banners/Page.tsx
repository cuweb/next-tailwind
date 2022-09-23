export default function PageBanner({ children }: any) {
	return (
		<header className="shadow bg-gradient-to-b from-cu-black-100 to-white">
			<div className="flex items-start px-6 py-8 mx-auto max-w-7xl md:items-center md:py-12 lg:px-8">
				<h1 className="text-3xl font-medium tracking-tight text-cu-black-800 md:text-4xl">
					{children}
				</h1>
			</div>
		</header>
	);
}
