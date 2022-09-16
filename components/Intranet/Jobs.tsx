/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid';

const tabs = [
  { name: 'Academic', href: '#', current: true },
  { name: 'Staff', href: '#', current: false },
];

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
  {
    id: 4,
    title: 'Back End Developer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 5,
    title: 'Front End Developer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 6,
    title: 'User Interface Designer',
    type: 'Student Services',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Jobs() {
  return (
    <section className="space-y-6 bg-white shadow sm:rounded-lg lg:col-span-2">
      <div className="overflow-hidden">
        <div className="rounded-t-lg border-b bg-gray-50 px-4 py-6">
          <h2
            id="applicant-information-title"
            className="text-medium font-bold leading-6 text-gray-900"
          >
            Job Listing
          </h2>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {positions.map((position) => (
            <li key={position.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-6 py-6">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm text-cu-black-900">
                      {position.title}
                    </p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-xs text-gray-500">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red"
                          aria-hidden="true"
                        />
                        Closes&nbsp;{''}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
