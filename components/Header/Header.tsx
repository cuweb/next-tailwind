import Navbar from '../Navbar/Navbar';
import GradientDiv from '../Gradient/GradientDiv';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="relative mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:static lg:py-48 lg:text-left">
          <GradientDiv />
          <div className="relative px-4 sm:px-8 lg:relative lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="text-red-carleton block xl:inline">
                Game On:&nbsp;
              </span>
              <span className="block text-black text-white xl:inline">
                Teaching Tweens Digital Literacy
              </span>
            </h1>
            <p className="text-white-200 mx-auto mt-3 max-w-md text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="hover:bg-red-carleton-700 bg-red-carleton flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                >
                  Register
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="text-red-carleton flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  View Story
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://newsroom.carleton.ca/wp-content/uploads/young-student-tablet-1600x700-1.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default Header;
