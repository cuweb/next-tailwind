const FooterSwoosh = () => {
	return (
		<div className="grid justify-center bg-[url('https://carleton.ca/assets/waves.svg')] bg-[length:100%] bg-bottom bg-no-repeat pb-36 text-center text-base lg:pt-4 lg:pb-44">
			<img
				className="w-auto mx-auto mb-6 h-44"
				src="/cu-logo-stacked-white-outline.svg"
				alt="Carleton"
			/>
			<ul className="flex justify-center text-gray-400">
				<li className="px-4" key="privacy">
					<a href="#" className="hover:text-white">
						Privacy Policy
					</a>
				</li>
				<li className="px-4" key="accessibility">
					<a href="#" className="hover:text-white">
						Accessibility
					</a>
				</li>
				<li className="px-4" key="copyright">
					<a href="#" className="hover:text-white">
						&copy; Copyright 2022
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterSwoosh;
