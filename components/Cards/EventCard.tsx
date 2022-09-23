/* This example requires Tailwind CSS v2.0+ */
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

export default function EventCard(props: any) {
  const { title, content } = props;

  // Temporary fallbacks
  const eventTitle = title ? title : "Event Title Placeholder"; // odd thing here
  const eventContent = content
    ? content
    : "Lorem ipsum dolor amet, consectetur adipiscing elit. Sed porttitor lacus vehicula.";

  return (
    <article className="overflow-hidden rounded-md bg-white">
      <img src="https://via.placeholder.com/300x200" />

      <div className="px-5 py-4">
        <h2>{eventTitle}</h2>
        <p>{eventContent}</p>

        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            className="col-span-2 items-center rounded-md border border-transparent bg-cu-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Register
          </button>
          <button
            type="button"
            className="items-center rounded-md border border-transparent bg-cu-black-100 px-4 py-2 text-sm font-medium text-cu-black-800 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <EllipsisHorizontalIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
