// {/* <div className="overflow-hidden bg-white shadow sm:rounded-md">
//   <ul role="list" className="divide-y divide-gray-200">
//     {items.map((item) => (
//       <li key={item.id} className="px-4 py-4 sm:px-6">
//         {/* Your content */}
//       </li>
//     ))}
//   </ul>
// </div>; */}

import React, { ReactNode } from "react";

export interface ListingProps {
  children?: ReactNode;
  className?: string;
  items?: any;
}

export type ListingColorsTypes = "grey" | "white";

const Listing: React.FC<ListingProps> = (props): JSX.Element => {
  const { children, items, className } = props;

  return (
    <div className={`${className}`}>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {items?.map((item: any) => (
            <li key={item.id} className="px-4 py-4 sm:px-6">
              {/* Your content */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listing;
