const StackedListRoot = ({ children }: any) => {
	return (
		<ul role="list" className="overflow-hidden">
			{children}
		</ul>
	);
};

const Dividers = ({ children }: any) => {
	return (
		<ul
			role="list"
			className="[&>li]:border-cu-cu-black-50 overflow-hidden [&>li]:border-b last:[&>li]:border-b-0"
		>
			{children}
		</ul>
	);
};

const StackedList = Object.assign(StackedListRoot, {
	Dividers,
});

export default StackedList;
