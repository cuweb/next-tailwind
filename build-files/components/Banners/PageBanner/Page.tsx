export default function PageBanner({ children }: any) {
	return (
		<header className="bg-cu-black-50">
			<div className="flex items-start px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
				<h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
					{children}
				</h1>
			</div>
		</header>
	);
}
