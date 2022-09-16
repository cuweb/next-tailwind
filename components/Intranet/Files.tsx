/* This example requires Tailwind CSS v2.0+ */
import { ClockIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import { DocumentChartBarIcon } from "@heroicons/react/24/outline";

const stuff = [
  {
    name: "Monthly Leave Report",
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
    name: "Dental Claim Form",
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
    name: "Healthcare Expenses Statement",
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
    name: "CUPE 3778 Collective Agreement",
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
    name: "Accident Report",
    preview: "175KB  ",
    handle: "10-05-2022",
    href: "#",
    location: "405 Robertson Hall",
    time: "2:00 PM",
    dateFull: "January 7, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
  },
];

export interface FilesProps {
  className?: string;
  title?: string;
}

const Files: React.FC<FilesProps> = (props): JSX.Element => {
  const { title, className } = props;

  const panelTitle = title ? title : " Panel Title";

  return (
    <>
      <section className="space-y-6 bg-white shadow sm:rounded-lg lg:col-span-1">
        <div className="overflow-hidden ">
          <div className="rounded-t-lg border-b bg-gray-50 px-4 py-6">
            <h2
              id="applicant-information-title"
              className="text-medium font-bold leading-6 text-gray-900"
            >
              {panelTitle}
            </h2>
          </div>
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {stuff.map((people) => (
                <li key={people.name}>
                  <a href={people.href} className="block hover:bg-gray-50">
                    <div className="flex items-center py-6 px-4">
                      <div className="items flex min-w-0 flex-1 items-center">
                        <div className="flex-shrink-0">
                          <svg
                            className="c-icon h-10 w-10"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <g>
                              <g>
                                <g fill="none" fill-rule="evenodd">
                                  <g fill-rule="nonzero">
                                    <path
                                      d="M4 23V1h10.84L20 6.473V23z"
                                      fill="#fff"
                                    ></path>
                                    <g fill="#bf112b">
                                      <path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z"></path>
                                      <path
                                        d="M14 7V1h.195L20 6.805V7z"
                                        fill-opacity=".215"
                                      ></path>
                                      <path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z"></path>
                                    </g>
                                  </g>
                                  <path
                                    d="M16 15.34c0-1.98-8-.117-8 2.263 0 .192.135.397.353.397 1.675 0 4.779-11 3.26-11s.859 9.023 3.66 9.023c.408 0 .727-.167.727-.683z"
                                    stroke="#bf112b"
                                    stroke-width=".5"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="min-w-0 px-4">
                          <h3 className="mb-1 text-sm font-semibold text-cu-black-900">
                            {people.name}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {people.preview} - {people.dateFull}
                          </p>
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
};

export default Files;
