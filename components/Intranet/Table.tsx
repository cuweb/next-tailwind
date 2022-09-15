/* This example requires Tailwind CSS v2.0+ */
const data = [
  { leaveType: "Vacation", beginning: 0, earned: 0, taken: 0, balance: 0 },
  { leaveType: "Sick Leave", beginning: 0, earned: 0, taken: 0, balance: 0 },
  { leaveType: "Special Leave", beginning: 0, earned: 0, taken: 0, balance: 0 },
  { leaveType: "Overtime", beginning: 0, earned: 0, taken: 0, balance: 0 },
  { leaveType: "Bereavment", beginning: 0, earned: 0, taken: 0, balance: 0 },
];

export default function Table() {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="bg-gray-50 px-4 py-5 sm:p-6">
          <h2
            id="applicant-information-title"
            className="text-lg font-medium leading-6  "
          >
            Leave Report
          </h2>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr className="bg-gray-500 ">
                          <th
                            scope="col"
                            className="py-3.5  pl-4 pr-3 text-left  text-sm font-semibold text-white sm:pl-6"
                          >
                            Leave Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-center  text-sm font-semibold text-white"
                          >
                            Begining Balance
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-center  text-sm font-semibold text-white"
                          >
                            Earned
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-center  text-sm font-semibold text-white"
                          >
                            Taken
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-center  text-sm font-semibold text-white"
                          >
                            Current Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((row) => (
                          <tr key={row.leaveType}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-500 sm:pl-6">
                              {row.leaveType}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                              {row.beginning}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                              {row.earned}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                              {row.taken}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-3 text-center text-sm text-gray-500">
                              {row.balance}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
