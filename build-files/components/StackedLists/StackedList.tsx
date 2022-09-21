const StackedListRoot = ({ children }: any) => {
	return <ul role="list">{children}</ul>;
};

const StackedList = Object.assign(StackedListRoot);

export default StackedList;
