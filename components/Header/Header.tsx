// import GradientDiv from "../Gradient/GradientDiv";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	return (
		<div className="relative bg-gray-50">
			<main className="lg:relative">
				<div className="relative w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:static lg:py-48 lg:text-left">
					{/* <GradientDiv /> */}
					<div className="relative px-4 sm:px-8 lg:relative lg:w-1/2 xl:pr-16">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
							<span className="block text-cu-red xl:inline">
								Game On:&nbsp;
							</span>
							<span className="bloc text-cu-black-900 xl:inline">
								Teaching Tweens Digital Literacy
							</span>
						</h1>
						<p className="max-w-md mx-auto mt-3 text-lg text-white-200 sm:text-xl md:mt-5 md:max-w-3xl">
							Anim aute id magna aliqua ad ad non deserunt sunt.
							Qui irure qui lorem cupidatat commodo. Elit sunt
							amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md hover:bg-cu-red-700 bg-cu-red md:py-4 md:px-10 md:text-lg"
								>
									Register
								</a>
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
								<a
									href="#"
									className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-cu-red hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
								>
									View Story
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
					<img
						className="absolute inset-0 object-cover w-full h-full"
						src="https://newsroom.carleton.ca/wp-content/uploads/young-student-tablet-1600x700-1.jpg"
						alt=""
					/>
				</div>
			</main>
		</div>
	);
};

export default Header;
