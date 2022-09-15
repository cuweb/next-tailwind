/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Disclosure, Listbox, Menu, Transition } from '@headlessui/react';
import GradientDiv from '../Gradient/GradientDiv';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ArrowUpOnSquareIcon,
  PencilIcon,
} from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const user = {
  name: 'Whitney Francis',
  email: 'whitney.francis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];
const tabs = [
  { name: 'Applied', href: '#', count: '2', current: false },
  { name: 'Phone Screening', href: '#', count: '4', current: false },
  { name: 'Interview', href: '#', count: '6', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
];
const candidates = [
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
  },
  // More candidates...
];
const publishingOptions = [
  {
    name: 'Published',
    description: 'This job posting can be viewed by anyone who has the link.',
    current: true,
  },
  {
    name: 'Draft',
    description: 'This job posting will no longer be publicly accessible.',
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <>
      {/* Page heading */}
      <header className="relative bg-gray-50 py-12 shadow">
        <GradientDiv />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-20 w-20 border-spacing-4 rounded-full border-2 border-white shadow"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span
                  className="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Human Person</h1>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <BriefcaseIcon
                    className="text- mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red"
                    aria-hidden="true"
                    aria-label="Job Title:"
                  />
                  Human Communications, DUC
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red"
                    aria-hidden="true"
                    aria-label="Location:"
                  />
                  401 Robertson Hall
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <ArrowUpOnSquareIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red"
                    aria-hidden="true"
                    aria-label="Reports To:"
                  />
                  Dr. Benoit-Antoine Bacon
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Page header */}
    </>
  );
}
