import React, { ReactNode } from "react";

export interface PanelProps {
  children?: ReactNode;
  className?: string;
}

export type PanelColorsTypes = "grey" | "white";

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
  const { children, className } = props;

  return <div className={`${className}`}>{children}</div>;
};

export default Panel;
