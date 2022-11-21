import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-cu-black-100 py-5 pl-6 pr-5">
      <div className="flex flex-1 justify-between sm:hidden">
        <button className="relative inline-flex items-center rounded-md border border-cu-black-200 bg-white px-4 py-2 text-sm font-medium text-cu-black-600 hover:bg-cu-black-50">
          Previous
        </button>
        <button className="relative inline-flex items-center rounded-md border border-cu-black-200 bg-white px-4 py-2 text-sm font-medium text-cu-black-600 hover:bg-cu-black-50">
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-cu-black-800">
          Showing
          <span className="px-1 font-semibold">1</span>
          to
          <span className="px-1 font-semibold">5</span>
          of
          <span className="px-1 font-semibold">48</span>
          results
        </p>
        <nav aria-label="Pagination">
          <ul className="inline-flex overflow-hidden rounded-md border border-cu-black-100">
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white py-2 px-4 px-2.5 text-sm text-cu-black-600 text-cu-black-400 last:border-0 hover:bg-cu-black-50">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-cu-black-50 px-4 py-2 text-sm font-semibold text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              1
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              2
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              3
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              4
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              5
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              …
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white px-4 py-2 text-sm text-cu-black-600 last:border-0 hover:bg-cu-black-50">
              10
            </li>
            <li className="flex cursor-pointer items-center border-r border-cu-black-100 bg-white py-2 px-4 px-2.5 text-sm text-cu-black-600 text-cu-black-400 last:border-0 hover:bg-cu-black-50">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
