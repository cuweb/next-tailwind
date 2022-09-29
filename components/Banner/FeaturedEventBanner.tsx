import GradientDiv from '../../_rds-final/_misc/Gradient/GradientDiv';

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
      <div className="relative mx-auto max-w-7xl px-8 py-8 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
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
