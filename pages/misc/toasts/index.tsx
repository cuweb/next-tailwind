import type { NextPage } from "next";
import Head from "next/head";
import {
	Container,
	Column,
	Panel,
	TopNav,
	Banner,
	FooterBasic,
} from "rds-tailwind";

// OLD SCHOOL RDS
import Toast from "../../../_rds-final/components/Toasts/Toasts";

const PageLayout: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="CU Prototypes" />

			<Banner
				align="horizontal"
				isType="dark-wave"
				title="Toast Examples"
			/>

			<main>
				<Container>
					<Column cols="2">
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>

					<Column cols="3">
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column>

					<Column cols="4">
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column>

					<Column cols="1/3">
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>

					<Column>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel hasBorder>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>
				</Container>

				<Container>
					<Column cols="2">
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>

					<Column cols="3">
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column>

					<Column cols="4">
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis.
							</p>
						</Panel>
					</Column>

					<Column cols="1/3">
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>

					<Column>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
						<Panel>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras vel urna in mauris lacinia
								convallis. Curabitur a nibh quis leo laoreet
								porttitor.
							</p>
						</Panel>
					</Column>
				</Container>
			</main>

			<FooterBasic />
			<Toast />
		</>
	);
};

export default PageLayout;
