import Container from "../../../../build-files/layouts/Container/Container";

const Banner = () => {
	return (
		<Container.Gray>
			<section className="max-w-5xl px-4 mx-auto mt-7 sm:mt-10">
				<div className="text-center ">
					<h3 className="text-4xl font-bold tracking-tight text-gray-900 s md:text-4xl ">
						Event Planning and Time Management
					</h3>
					<p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui
						irure qui lorem cupidatat commodo. Elit sunt amet fugiat
						veniam occaecat fugiat aliqua.
					</p>
					<div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							<a
								href="#"
								className="flex items-center justify-center w-full px-6 py-3 text-base font-medium bg-white border border-transparent rounded-md border-cu-red text-cu-red hover:bg-cu-red hover:text-white md:py-4 md:px-7 md:text-lg"
							>
								Add to My Event
							</a>
						</div>
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
							<a
								href="#"
								className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md bg-cu-red hover:bg-cu-black-900 md:py-4 md:px-7 md:text-lg"
							>
								Register
							</a>
						</div>
					</div>
				</div>
			</section>
		</Container.Gray>
	);
};
export default Banner;
