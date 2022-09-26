const DashboardRoot = ({ children }: any) => {
	return (
		<section className="bg-white border border-gray-200 sm:rounded-lg">
			{children}
		</section>
	);
};

const Title = ({ children }: any) => {
	return (
		<h2 className="px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gradient-to-r from-gray-50 to-white text-cu-black-900">
			{children}
		</h2>
	);
};

const DashboardPanel = Object.assign(DashboardRoot, {
	Title,
});

export default DashboardPanel;
