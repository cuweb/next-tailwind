import Container from "../../../build-files/layouts/Container/Container";

const Banner = () => {
  return (
    <>
      <Container bgColor="gray">
        <section className="mx-auto mt-7 max-w-5xl px-4 sm:mt-10">
          <div className="  text-center">
            <h3 className="s text-4xl font-bold tracking-tight text-gray-900 md:text-4xl ">
              Event Planning and Time Management
            </h3>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md  border border-transparent  border-cu-red bg-white px-6 py-3 text-base font-medium text-cu-red  hover:bg-cu-red hover:text-white md:py-4 md:px-7 md:text-lg"
                >
                  Add to My Event
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cu-red px-6 py-3 text-base font-medium text-white  hover:bg-cu-black-900 md:py-4 md:px-7 md:text-lg"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
export default Banner;
