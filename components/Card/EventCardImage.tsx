import {
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function EventCard2(props: any) {
  const { name, link, register, month, day, description } = props;

  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="absolute top-48 px-6">
        <div className="flex h-16 w-16 -translate-y-1/2 transform flex-col items-center justify-center rounded-lg bg-cu-red shadow">
          <p className="text-xs font-bold uppercase text-white">{month}</p>
          <p className="text-2xl font-bold uppercase text-white">{day}</p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <a href="TITLE" className="mt-6 block">
            <p className="text-xl font-semibold text-gray-900">{name}</p>
          </a>
          <p className="mt-4 flex items-center text-sm text-gray-500">
            <ClockIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
              aria-hidden="true"
            />

            <time dateTime={day}>2:00pm - 5:00pm</time>
          </p>
          <p className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
              aria-hidden="true"
            />
            405 Robertson
          </p>
        </div>
      </div>
      <div className="flex">
        <a
          href={register}
          className="flex-1 rounded-bl-lg bg-cu-blue-50 p-6 font-semibold text-cu-blue hover:bg-cu-blue-600 hover:text-white md:px-8"
        >
          Register Now <span aria-hidden="true"> &rarr;</span>
        </a>
        <a
          href={link}
          className="ml-auto flex items-center rounded-br-lg bg-cu-blue-800 px-6 text-white hover:bg-cu-red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7 w-7"
            fill="currentColor"
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
