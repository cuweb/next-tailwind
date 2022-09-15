import React, { ReactNode } from "react";

export interface PanelProps {
  className?: string;
  title?: string;
}

export type PanelColorsTypes = "grey" | "white";

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
  const { title, className } = props;

  const panelTitle = title ? title : " Panel Title";

  return (
    <>
      <div className="py-4">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="bg-gray-50 px-4 py-5 sm:p-6">
            <h2
              id="applicant-information-title"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {panelTitle}
            </h2>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col">Panel Content</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
