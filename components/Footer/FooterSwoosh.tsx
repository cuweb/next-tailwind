const FooterSwoosh = () => {
	return (
		<div className="grid justify-center bg-cu-waves-red bg-[length:100%] bg-bottom bg-no-repeat pb-36 lg:pt-4 lg:pb-44">
			<img
				className="w-auto mx-auto mb-6 h-44"
				src="/cu-logo-stacked-white-outline.svg"
				alt="Carleton"
			/>
			<ul className="flex justify-center space-x-6 text-sm text-gray-400">
				<li key="privacy">
					<a href="#" className="hover:text-white">
						Privacy Policy
					</a>
				</li>
				<li key="accessibility">
					<a href="#" className="hover:text-white">
						Accessibility
					</a>
				</li>
				<li key="copyright">
					<a href="#" className="hover:text-white">
						&copy; Copyright 2022
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterSwoosh;
