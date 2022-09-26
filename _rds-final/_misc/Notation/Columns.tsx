import NewsFeed from "../../../components/Listings/NewsFeed";

const classNameRoot =
	"cu-column mx-auto mb-8 grid max-w-7xl gap-8 px-8 [&:last-child]:mb-0";

const ColumnRoot = ({ children }: any) => {
	return <section>{children}</section>;
};

const Two = ({ unstyled, children }: any) => {
	return <div className={`${classNameRoot}  grid-cols-2`}>{children}</div>;
};

const Four = ({ unstyled, className, children }: any) => {
	return (
		<div className={`${unstyled ? className : classNameRoot}  grid-cols-4`}>
			{children}
		</div>
	);
};

const Column = Object.assign(ColumnRoot, {
	Four,
	Two,
	NewsFeed,
});

export default Column;
