import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../../../_rds-final/components/Navbar/Carleton";
import AnimatedBg from "../../../assets-old/AnimatedBg";

const bgImage =
	"https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg";

const textPara = `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Proin tristique ultrices magna at
    sollicitudin. Duis venenatis arcu quis nibh blandit
    vestibulum. Praesent tempus est at venenatis
    elementum. In vestibulum purus in sapien varius, ac
    iaculis ligula eleifend. Nulla tempus interdum ipsum
    quis iaculis.`;

const styles = {
	header: `relative`,
	headerGrey: `bg-gradient-to-b from-white to-cu-black-100 text-cu-black-800`,
	headerRed: `bg-gradient-to-b from-cu-red to-cu-red-900 text-white`,
	headerBlack: `bg-cu-black-800 text-white`,
	headerAnimated: `bg-cu-black-800 text-white`,
	childrenWrap: `mx-auto flex max-w-7xl flex-col gap-4 md:gap-8 justify-between [&>*]:z-10 [&>*:last-child]:z-0 px-6 md:px-8 py-12 md:py-20`,
	textWrap: `flex flex-col gap-4 md:flex-[1_1_65%]`,
	buttonWrap: `flex gap-6 flex-wrap md:flex-[1_1_35%] justify-end`,
	title: `text-3xl font-medium lg:text-4xl`,
	paragraph: `text-base lg:text-xl max-w-5xl`,
	alignVertical: `md:flex-col items-center text-center`,
	alignHorizontal: `md:flex-row items-center text-center md:text-left`,
};

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Default Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Default Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Default Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Default Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Red Wave Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Red Wave Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Red Wave Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Red Wave Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerBlack}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Black Wave Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerBlack}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Black Wave Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerBlack}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Black Wave Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerBlack}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Black Wave Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div
						id="wave"
						className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"
					></div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Image Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div className="absolute inset-0">
						<img
							className="object-cover w-full h-full"
							src={bgImage}
							alt=""
						/>
						<div
							className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
							aria-hidden="true"
						/>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Image Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div className="absolute inset-0">
						<img
							className="object-cover w-full h-full"
							src={bgImage}
							alt=""
						/>
						<div
							className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
							aria-hidden="true"
						/>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Image Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div className="absolute inset-0">
						<img
							className="object-cover w-full h-full"
							src={bgImage}
							alt=""
						/>
						<div
							className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
							aria-hidden="true"
						/>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerRed}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Image Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<div className="absolute inset-0">
						<img
							className="object-cover w-full h-full"
							src={bgImage}
							alt=""
						/>
						<div
							className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
							aria-hidden="true"
						/>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Animated Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<AnimatedBg />
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Animated Banner</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<AnimatedBg />
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Animated Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<AnimatedBg />
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>Animated Banner</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>

					<AnimatedBg />
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>
							Big Content Banner that have extraordinarily long
							title that span multiple lines and hopefully provide
							a good style and responsive test
						</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>
							Big Content Banner that have extraordinarily long
							title that span multiple lines and hopefully provide
							a good style and responsive test
						</h1>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignVertical}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>
							Big Content Banner that have extraordinarily long
							title that span multiple lines and hopefully provide
							a good style and responsive test
						</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
					</div>
				</div>
			</header>

			<br />
			<br />

			<header className={`${styles.header} ${styles.headerGrey}`}>
				<div
					className={`${styles.childrenWrap} ${styles.alignHorizontal}`}
				>
					<div className={styles.textWrap}>
						<h1 className={styles.title}>
							Big Content Banner that have extraordinarily long
							title that span multiple lines and hopefully provide
							a good style and responsive test
						</h1>
						<p className={styles.paragraph}>{textPara}</p>
					</div>

					<div className={styles.buttonWrap}>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium bg-white rounded-md shadow-md text-cu-black-800 hover:bg-cu-red hover:text-white focus:outline-none"
						>
							Button Two
						</button>
						<button
							type="button"
							aria-label="Button One"
							className="inline-flex items-center justify-center gap-1 px-4 py-3 text-base font-medium text-white rounded-md shadow-md bg-cu-red hover:bg-cu-black-600 focus:outline-none"
						>
							Button One
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Home;
