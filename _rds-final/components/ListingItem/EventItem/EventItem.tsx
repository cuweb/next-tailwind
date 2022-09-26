import {
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

export default function EventItem(props: any) {
  const { name, link, location, time, month, day, dateFull } = props;

  return (
    <li key={name} className="border-b border-cu-black-100 last:border-b-0">
      <a href={link} className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-6">
          <div className="flex min-w-0 flex-1 sm:items-center">
            <div className="flex h-20 w-20 flex-col justify-center rounded-2xl bg-gray-50 text-center shadow">
              <p className="text-xs font-bold uppercase text-cu-red">{month}</p>
              <p className="text-2xl font-bold uppercase text-cu-black-900">
                {day}
              </p>
            </div>

            <div className="min-w-0 flex-1 px-6 md:grid md:gap-4">
              <div>
                <p className="text-medium mb-2 font-semibold text-gray-800">
                  {name}
                </p>
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <ClockIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
                      aria-hidden="true"
                    />

                    <time dateTime={dateFull}>{time}</time>
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-4">
                    <MapPinIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
                      aria-hidden="true"
                    />
                    {location}
                  </p>
                </div>
                <div className="mt-2">
                  <span className="rounded-xl bg-cu-blue-50 px-2 text-xs font-semibold leading-5 text-cu-black-800 last:ml-1.5">
                    Multi-Day
                  </span>
                  <span className="rounded-xl bg-cu-red-50 px-2 text-xs  font-semibold leading-5 text-cu-black-800 last:ml-1.5">
                    Category
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-cu-black-300"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </li>
  );
}
