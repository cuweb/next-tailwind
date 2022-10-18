import {
  ClockIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';

export default function EventCard(props: any) {
  const { name, link, month, day, multi, time, location } = props;

  const multiDayDisplay = () => {
    if (multi) {
      return (
        <CalendarDaysIcon
          className="mr-2 h-5 w-5 flex-shrink-0 text-cu-red-300"
          aria-hidden="true"
        />
      );
    } else {
      return (
        <ClockIcon
          className="mr-2 h-5 w-5 flex-shrink-0 text-cu-red-300"
          aria-hidden="true"
        />
      );
    }
  };

  return (
    <div className="group relative  flex flex-col overflow-hidden rounded-lg shadow-lg duration-300 ease-in hover:scale-105">
      <a href={link} className=" cursor-pointer ">
        <div className="absolute top-48 px-6">
          <div className="w-16 flex-none md:w-20">
            <div className="flex h-16 w-auto flex-none -translate-y-1/2 transform flex-col justify-center rounded-lg bg-gray-50 text-center shadow duration-300 ease-in group-hover:bg-cu-red md:h-20">
              <p className="text-xs font-bold uppercase text-cu-red duration-300 ease-in group-hover:text-white">
                {month}
              </p>
              <p className="text-2xl font-bold uppercase text-cu-black-800 duration-300 ease-in group-hover:text-white">
                {day}
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-48 w-full object-cover"
            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
            alt=""
          />
        </div>

        <div className="bg-white p-7">
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-cu-black duration-300 ease-in group-hover:text-cu-red">
              {name}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center text-sm text-cu-black-600">
                {multiDayDisplay()}
                {multi ? multi : time}
              </li>

              <li className="flex items-center text-sm text-cu-black-600">
                <MapPinIcon
                  className="mr-2 h-5 w-5 flex-shrink-0 text-cu-red-300"
                  aria-hidden="true"
                />
                {location}
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}
