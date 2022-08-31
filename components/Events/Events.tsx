import { CalendarIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';

const people = [
  {
    name: 'Lived Experience Luncheon Series with Dr. Alex Auerbach',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  },
  {
    name: 'Science Student Alumni Mixer 2022',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Milestone Anniversary Celebration 2022',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  },
  {
    name: 'Virtual Career Fairs',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: '80 Years of Carleton University',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Events = () => {
  return (
    <div>
      <div className="mt-6 flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img
                    className="mt-1 h-20 w-20 rounded"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 truncate text-lg font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="inline-flex truncate pr-5 text-sm text-gray-500">
                    <CalendarIcon
                      className="mr-1 h-5 w-5 text-red-carleton "
                      aria-hidden="true"
                    />
                    {person.handle}
                  </p>
                  <p className="inline-flex truncate pr-5 text-sm text-gray-500">
                    <MapPinIcon
                      className="mr-1 h-5 w-5 text-red-carleton"
                      aria-hidden="true"
                    />
                    {person.location}
                  </p>
                  <p className="inline-flex truncate text-sm text-gray-500">
                    <ClockIcon
                      className="mr-1 h-5 w-5 text-red-carleton"
                      aria-hidden="true"
                    />
                    {person.time}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <a
          href="#"
          className="hover:bg-red-carleton-700 flex w-full items-center justify-center rounded-md border border-transparent bg-red-carleton px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
        >
          View all
        </a>
      </div>
    </div>
  );
};

export default Events;
