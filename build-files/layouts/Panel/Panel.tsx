import DashboardPanel from "../DashboardPanel/DashboardPanel";

const Empty = ({ className, children }: any) => {
	return <div className={`${className}`}>{children}</div>;
};

const Panel = {
	Empty,
};

const Dashboard = {
	Empty,
};

export default Panel;
