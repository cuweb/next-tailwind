export default function PageBanner({ children }: any) {
	return (
		<header className="bg-cu-black-50">
			<div className="flex items-start px-6 pt-8 mx-auto max-w-7xl md:pt-12 lg:px-8">
				<h1 className="text-3xl font-medium text-cu-black-800 md:text-4xl">
					{children}
				</h1>
			</div>
		</header>
	);
}
