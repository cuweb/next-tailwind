const PanelRoot = ({ className, children }: any) => {
	return <div className={`${className}`}>{children}</div>;
};

const Panel = Object.assign(PanelRoot);

export default Panel;
