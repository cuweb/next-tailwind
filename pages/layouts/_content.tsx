import type { NextPage } from "next";

// Font styles
const header1 = "";
const header2 = "";
const header3 = "";
const paragraph = "mb-5";

const PageContent: NextPage = () => {
	return (
		<>
			<p className={paragraph}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
				mollis leo a turpis fringilla ultrices. Pellentesque consectetur
				lectus ac tincidunt dictum.
			</p>
			<h2 className="text-2xl font-semibold tracking-tight text-cu-black-800 lg:text-3xl">
				Header Two
			</h2>
			<p className={paragraph}>
				n aliquam nisl risus, non euismod odio condimentum ut. In hac
				habitasse platea dictumst. Aenean vulputate nisl sit amet velit
				finibus lacinia. Nullam sit amet aliquam odio. Donec aliquam
				velit vel vestibulum ultricies.
			</p>
			<p className={paragraph}>
				Pellentesque dictum enim ut libero molestie, id iaculis nulla
				interdum. Integer semper, velit ut convallis ultrices, est sem
				ultricies odio, in vulputate est nisl vitae dui. Integer elit
				felis, porta ac euismod vel, lobortis at nunc. Vivamus elit
				mauris, aliquet at nisl nec, malesuada aliquam mi. Curabitur sit
				amet velit sed sem dapibus commodo.
			</p>
			<h3 className="text-xl font-semibold tracking-tight text-cu-black-800 lg:text-2xl">
				Header Three
			</h3>
			<p className={paragraph}>
				Sed eu pulvinar velit, ac luctus mi. Duis viverra augue ut est
				blandit, eu sagittis lectus posuere. Ut pulvinar leo sed lacus
				hendrerit imperdiet.{" "}
			</p>
			<h4 className="text-lg font-semibold tracking-tight text-cu-black-800">
				Header Four
			</h4>
			<p className={paragraph}>
				Sed eu pulvinar velit, ac luctus mi. Duis viverra augue ut est
				blandit, eu sagittis lectus posuere. Ut pulvinar leo sed lacus
				hendrerit imperdiet.{" "}
			</p>
		</>
	);
};

export default PageContent;
