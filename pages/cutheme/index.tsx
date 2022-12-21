import type { NextPage } from "next";
// import Head from "next/head";
// import { TopNav, FooterBasic, Banner } from "rds-tailwind";
// import SideNavLight from "./components/SideNavLight";

const CuTheme: NextPage = () => {
	return (
		<div className="m-20 space-y-6">
			<p>
				<a className="font-semibold text-cu-red" href="/cutheme/light">
					View cutheme with light nav
				</a>
			</p>
			<p>
				<a className="font-semibold text-cu-red" href="/cutheme/fade">
					View cutheme with gradient nav
				</a>
			</p>
		</div>
	);
};

export default CuTheme;
