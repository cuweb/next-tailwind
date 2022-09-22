const classNameRoot = "px-6 py-6";

const List = ({ children }: any) => {
	return (
		<li
			className={`relative ${classNameRoot} border-b border-cu-black-100 last:border-b-0`}
		>
			{children}
		</li>
	);
};

const Single = ({ children }: any) => {
	return <div className={`relative ${classNameRoot}`}>{children}</div>;
};

const Title = (props: any) => {
	const { title } = props;
	return (
		<h3 className="font-semibold text-medium text-cu-blue">
			<a href="#" className="hover:text-cu-red focus:outline-none">
				{/* Extend touch target to entire panel */}
				<span className="absolute inset-0" aria-hidden="true" />
				{title}
			</a>
		</h3>
	);
};

const Date = (props: any) => {
	const { date } = props;
	return <p className="mt-1 mb-2 text-sm italic text-cu-black-400">{date}</p>;
};

const Excerpt = (props: any) => {
	const { excerpt } = props;
	return <p className="mt-2 text-sm text-cu-black-800">{excerpt}</p>;
};

const Category = (props: any) => {
	const { category } = props;
	return (
		<p className="inline-flex px-3 py-1 mt-4 mr-2 text-xs font-semibold rounded-md bg-cu-black-50 text-cu-black-800">
			{category}
		</p>
	);
};

const NewsItem = {
	List,
	Single,
	Title,
	Date,
	Excerpt,
	Category,
};

export default NewsItem;
