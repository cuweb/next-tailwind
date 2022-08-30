import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "Undergraduate Admissions",
    initials: "UG",
    href: "#",
    members: 1600,
    bgColor: "bg-pink-400",
  },
  {
    name: "Graduate Admissions",
    initials: "GA",
    href: "#",
    members: 1200,
    bgColor: "bg-purple-400",
  },
  {
    name: "Canada Day",
    initials: "CD",
    href: "#",
    members: 1600,
    bgColor: "bg-yellow-400",
  },
  {
    name: "Fall Orientation",
    initials: "FO",
    href: "#",
    members: 8000,
    bgColor: "bg-green-400",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Stacks = () => {
  return (
    <div>
      <h2 className="text-xs font-medium uppercase tracking-wide text-gray-500">
        Pinned Points
      </h2>
      <ul className="mt-3 grid grid-cols-1 gap-5 ">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stacks;
