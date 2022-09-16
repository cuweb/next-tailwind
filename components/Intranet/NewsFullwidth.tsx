/* This example requires Tailwind CSS v2.0+ */
const announcements = [
  {
    id: 1,
    title: "Office closed on July 2nd",
    category: "Human Resources",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
  },
  {
    id: 2,
    title: "New password policy",
    category: "Healthy Workplace",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
  },
  {
    id: 3,
    title: "Office closed on July 2nd",
    category: "Potato",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NewsFullwidth() {
  return (
    <section className="bg-whiteshadow space-y-6 bg-white shadow sm:rounded-lg ">
      <div className="overflow-hidden ">
        <div className="rounded-t-lg border-b bg-gray-50 px-4 py-6">
          <h2
            id="applicant-information-title"
            className="text-medium font-bold leading-6 text-gray-900"
          >
            News Feed
          </h2>
        </div>
        <div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="px-6 py-6">
                  <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                    <h3 className="text-medium font-semibold text-cu-black-900">
                      <a
                        href="#"
                        className="hover:underline focus:outline-none"
                      >
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {announcement.title}
                      </a>
                    </h3>
                    <p className="line-clamp-2 mt-2 text-sm text-gray-500">
                      {announcement.preview}
                    </p>
                    <p className="mt-4 mr-1.5 inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {announcement.category}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 px-6">
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md bg-cu-red px-4 py-4 text-sm font-medium text-white hover:bg-cu-black-900"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
