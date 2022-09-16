/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: 'Beginning Balance', stat: '23.96' },
  { name: 'Earned', stat: '1.83' },
  { name: 'Taken', stat: '0' },
  { name: 'Balance', stat: '25.79' },
];

export default function Stats() {
  return (
    <div className="py-4">
      <dl className="mt-5 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 text-center shadow sm:p-6 "
          >
            <dt className="truncate text-4xl font-bold tracking-tight text-cu-black-900">
              {item.stat}
            </dt>
            <dd className="text-small mt-1 text-xs text-gray-500">
              {item.name}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
