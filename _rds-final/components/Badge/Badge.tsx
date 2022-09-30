const classNameRoot =
	"rounded-xl bg-cu-blue-50 px-2 font-semibold text-cu-black-800 mr-2 last:mr-0 whitespace-nowrap inline-flex";

const BadgeRoot = ({ children }: any) => {
	return <p className={`${classNameRoot} text-xs`}>{children}</p>;
};

const Badge = Object.assign(BadgeRoot, {});

export default Badge;
