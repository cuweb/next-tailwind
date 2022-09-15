/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';

const people = [
  {
    name: 'Lived Experience Luncheon Series with Dr. Alex Auerbach',
    href: '#',
    handle: '10-05-2022',
    location: '405 Robertson Hall',
    dateFull: 'January 7, 2020',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  },
  {
    name: 'Science Student Alumni Mixer 2022',
    handle: '10-05-2022',
    href: '#',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    dateFull: 'January 7, 2020',
    imageUrl:
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: 'Milestone Anniversary Celebration 2022',
    handle: '10-05-2022',
    dateFull: 'January 7, 2020',
    href: '#',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  },
  {
    name: 'Virtual Career Fairs',
    handle: '10-05-2022',
    dateFull: 'January 7, 2020',
    href: '#',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    imageUrl:
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    name: '80 Years of Carleton University',
    handle: '10-05-2022',
    href: '#',
    location: '405 Robertson Hall',
    time: '2:00 PM',
    dateFull: 'January 7, 2020',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Events() {
  return (
    <section className="space-y-6 rounded-lg shadow lg:col-span-2 lg:col-start-1">
      <div className="overflow-hidden bg-white">
        <div className="border-b bg-gray-50 px-4 py-6">
          <h2
            id="applicant-information-title"
            className="text-medium font-bold leading-6 text-gray-900"
          >
            Upcoming Events
          </h2>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {people.map((people) => (
              <li key={people.name}>
                <a href={people.href} className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="mt-1 h-20 w-20 rounded"
                          src={people.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:gap-4">
                        <div>
                          <div className="min-w-0 flex-1">
                            <p className="text-medium mb-2 truncate pr-2 font-medium text-cu-black-900">
                              {people.name}
                            </p>
                            <p className="inline-flex truncate pr-5 text-sm  text-cu-black-700">
                              <CalendarIcon
                                className="text-red-carleton mr-1 h-5 w-5 text-cu-red"
                                aria-hidden="true"
                              />
                              {people.dateFull}
                            </p>
                            <p className="inline-flex truncate pr-5 text-sm text-cu-black-700">
                              <MapPinIcon
                                className="text-red-carleton mr-1 h-5 w-5 text-cu-red"
                                aria-hidden="true"
                              />
                              {people.location}
                            </p>
                            <p className="inline-flex truncate text-sm text-cu-black-700">
                              <ClockIcon
                                className="text-red-carleton mr-1 h-5 w-5 text-cu-red"
                                aria-hidden="true"
                              />
                              {people.time}
                            </p>
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
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}