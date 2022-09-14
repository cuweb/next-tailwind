/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";

const meetings = [
  {
    id: 1,
    date: "January 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  {
    id: 2,
    date: "January 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  {
    id: 3,
    date: "January 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  {
    id: 4,
    date: "January 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  {
    id: 5,
    date: "January 10th, 2022",
    time: "5:00 PM",
    datetime: "2022-01-10T17:00",
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    location: "Starbucks",
  },
  // More meetings...
];

const announcements = [
  {
    id: 1,
    title: "Office closed on July 2nd",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "New password policy",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
  {
    id: 3,
    title: "Office closed on July 2nd",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Events() {
  return (
    <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
      <section className="space-y-6 lg:col-span-2 lg:col-start-1">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <h2
              id="applicant-information-title"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Carleton Top 5
            </h2>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
              {meetings.map((meeting) => (
                <li
                  key={meeting.id}
                  className="relative flex space-x-4 py-4 xl:static"
                >
                  <img
                    src={meeting.imageUrl}
                    alt=""
                    className="h-14 w-14 flex-none rounded-full"
                  />
                  <div className="flex-auto">
                    <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                      {meeting.name}
                    </h3>
                    <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>
                          <time dateTime={meeting.datetime}>
                            {meeting.date} at {meeting.time}
                          </time>
                        </dd>
                      </div>
                      <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                        <dt className="mt-0.5">
                          <span className="sr-only">Location</span>
                          <MapPinIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>{meeting.location}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="timeline-title"
        className="lg:col-span-1 lg:col-start-3"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <h2
              id="applicant-information-title"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              News Feed
            </h2>
          </div>
          <div className="px-4 py-2 sm:px-6">
            <div className="mt-6 flow-root">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a
                          href="#"
                          className="hover:underline focus:outline-none"
                        >
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {announcement.title}
                        </a>
                      </h3>
                      <p className="line-clamp-2 mt-1 text-sm text-gray-600">
                        {announcement.preview}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
