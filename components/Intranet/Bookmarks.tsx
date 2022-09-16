/* This example requires Tailwind CSS v2.0+ */
import { ClockIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import {
  ArrowTopRightOnSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const stuff = [
  {
    name: "Carleton 360",
    href: "#",
    preview: "175KB  ",
    handle: "10-05-2022",
    location: "405 Robertson Hall",
    dateFull: "January 7, 2020",
    time: "2:00 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
  {
    name: "Carleton Central",
    preview: "175KB  ",
    handle: "10-05-2022",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    dateFull: "January 7, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    name: "Events Calendar",
    preview: "175KB  ",
    handle: "10-05-2022",
    dateFull: "January 7, 2020",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
  {
    name: "Travel & Expenses",
    preview: "175KB  ",
    handle: "10-05-2022",
    dateFull: "January 7, 2020",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    name: "Brightspace",
    preview: "175KB  ",
    handle: "10-05-2022",
    dateFull: "January 7, 2020",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
  {
    name: "eShop",
    preview: "175KB  ",
    handle: "10-05-2022",
    dateFull: "January 7, 2020",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    imageUrl:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Bookmarks() {
  return (
    <>
      <section className="space-y-6 bg-white shadow sm:rounded-lg lg:col-span-1">
        <div className="overflow-hidden ">
          <div className="rounded-t-lg border-b bg-gray-50 px-4 py-6">
            <h2
              id="applicant-information-title"
              className="text-medium font-bold leading-6 text-gray-900"
            >
              Your Bookmarks
            </h2>
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {stuff.map((people) => (
                <li key={people.name}>
                  <a
                    href={people.href}
                    className="block text-cu-black-700 hover:bg-gray-50 hover:text-cu-red"
                  >
                    <div className="flex items-center py-6 sm:px-4">
                      <div className="items flex min-w-0 flex-1 lg:items-center">
                        <div className="min-w-0 px-4">

                          <span className="mb-1 text-sm font-semibold inline-flex">
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2"/> {people.name}
                          </span>
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
    </>
  );
}

export function BookmarksEmpty() {
  return (
    <>
      <section className="space-y-6 bg-white shadow sm:rounded-lg lg:col-span-1">
        <div className="overflow-hidden ">
          <div className="rounded-t-lg border-b bg-gray-50 px-4 py-6">
            <h2
              id="applicant-information-title"
              className="text-medium font-bold leading-6 text-gray-900"
            >
              Empty Bookmarks
            </h2>
          </div>
          <div className="my-10 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No Links</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding a new link.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-cu-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cu-black-700 focus:outline-none focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                New Link
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
