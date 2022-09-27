import Badge from "../../Badge/Badge";

const classNameRoot = "";

const List = ({ children }: any) => {
	return <li className={`relative ${classNameRoot} p-6`}>{children}</li>;
};

const Single = ({ children }: any) => {
	return <div className={`relative ${classNameRoot}`}>{children}</div>;
};

const Title = (props: any) => {
	const { title, link } = props;
	return (
		<h3 className="font-semibold text-medium text-cu-blue">
			<a href={link} className="hover:text-cu-red focus:outline-none">
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
		<div className="mt-2">
			<Badge.XSmall>{category}</Badge.XSmall>
		</div>
	);
};

const FeedItem = {
	List,
	Single,
	Title,
	Date,
	Excerpt,
	Category,
};

export default FeedItem;
