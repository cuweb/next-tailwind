import GradientDiv from "../../_rds-final/_misc/Gradient/GradientDiv";

export default function FeaturedEventBanner({ children }: any) {
	return (
		<header className="relative pb-32">
			{/* <header className="relative pb-32 bg-gray-800"> */}
			<GradientDiv />
			{/* <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
          alt=""
        />
        <div
          className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div> */}
			<div className="relative px-8 py-12 mx-auto max-w-7xl lg:py-20">
				<h1 className="text-3xl font-semibold text-cu-black-800 md:text-5xl">
					Featured Events
				</h1>
				{/* <p className="max-w-3xl mt-6 text-xl text-gray-300">
					Varius facilisi mauris sed sit. Non sed et duis dui leo,
					vulputate id malesuada. Cras aliquet purus dui laoreet diam
					sed lacus, fames.
				</p> */}
			</div>
		</header>
	);
}
