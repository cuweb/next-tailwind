import type { NextPage } from "next";
import Head from "next/head";
import {
	TopNav,
	FooterBasic,
	Container,
	Column,
	Banner,
	Prose,
} from "rds-tailwind";
import { CoreContent } from "./assets/data";

const content = {
	core: `
    <h2>Prose in cutheme</h2>

    <p>
    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
    sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
    id at vitae feugiat egestas ac. Diam nulla orci at in viverra
    scelerisque eget. Eleifend egestas fringilla sapien.
    </p>
    
    <p>
    Faucibus commodo massa rhoncus, volutpat.
    <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
    Mattis mauris semper sed amet vitae sed turpis id. Id dolor
    praesent donec est. Odio penatibus risus viverra tellus varius
    sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
    Dignissim sed eget risus enim.
    <a href=&quot;#&quot;>Mattis mauris semper</a> sed amet vitae sed turpis
    id.
    </p>
    
    <img
    src=&quot;https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;w=1310&amp;h=873&amp;q=80&amp;facepad=3&quot;
    alt=&quot;&quot;
    width=&quot;1310&quot;
    height=&quot;873&quot;
    />
    
    <ul>
    <li>Quis elit egestas venenatis mattis dignissim.</li>
    <li>
        Cras cras lobortis vitae vivamus ultricies facilisis tempus.
    </li>
    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
    </ul>
    
    <p>
    Quis semper vulputate aliquam venenatis egestas sagittis quisque
    orci. Donec commodo sit viverra aliquam porttitor ultrices
    gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
    justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
    Amet, duis sed elit interdum dignissim.
    </p>
    
    <h3>H3 Heading</h3>
    
    <p>
    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
    consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
    vitae interdum mauris enim, consequat vulputate nibh. Maecenas
    pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
    enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
    turpis ipsum eu a sed convallis diam.
    </p>
    
    <blockquote>
    <p>
        Sagittis scelerisque nulla cursus in enim consectetur quam.
        Dictum urna sed consectetur neque tristique pellentesque.
        Blandit amet, sed aenean erat arcu morbi.
    </p>
    </blockquote>
    <p>
    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
    risus enim. Mattis mauris semper sed amet vitae sed turpis id.
    Id dolor praesent donec est. Odio penatibus risus viverra tellus
    varius sit neque erat velit.
    </p>
    
    <h4>H4 Heading</h4>
    <p>
    Purus morbi dignissim senectus mattis <a href=&quot;#&quot;>adipiscing</a>
    . Amet, massa quam varius orci dapibus volutpat cras. In amet eu
    ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
    viverra ridiculus non molestie. Gravida quis fringilla amet eget
    dui tempor dignissim. Facilisis auctor venenatis varius nunc,
    congue erat ac. Cras fermentum convallis quam.
    </p>
    
    <p>
    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
    risus enim. Mattis mauris semper sed amet vitae sed turpis id.
    Id dolor praesent donec est. Odio penatibus risus viverra tellus
    varius sit neque erat velit.
    </p>
    
    <ol>
    <li>Quis elit egestas venenatis mattis dignissim.</li>
    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.
    </li>
    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
    </ol>
    
    <p>
    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
    risus enim. Mattis mauris semper sed amet vitae sed turpis id.
    Id dolor praesent donec est. Odio penatibus risus viverra tellus
    varius sit neque erat velit.
    </p>
    `,
};

const CuTheme: NextPage = () => {
	return (
		<>
			<Head>
				<title>Carleton University | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<TopNav logoUrl="https://carleton.ca/" title="WordPress" />

			<Banner
				align="horizontal"
				isType="dark-wave"
				title="Welcome to cutheme 2.0"
			/>

			<main className="">
				<Container>
					<Column cols="1/3">
						<nav className="bg-slate-200">
							<p className="bg-slate-400">SideNav</p>
						</nav>

						<section className="bg-slate-200">
							<Prose as="article" content={content.core} />
							<br />
							<br />
							<article className="prose prose-lg prose-article prose-img:w-full prose-img:rounded-lg lg:prose-xl">
								<h2>Prose in cutheme</h2>
								<p>
									Aliquet nec orci mattis amet quisque
									ullamcorper neque, nibh sem. At arcu, sit
									dui mi, nibh dui, diam eget aliquam. Quisque
									id at vitae feugiat egestas ac. Diam nulla
									orci at in viverra scelerisque eget.
									Eleifend egestas fringilla sapien.
								</p>

								<p>
									Faucibus commodo massa rhoncus, volutpat.
									<strong>Dignissim</strong> sed{" "}
									<strong>eget risus enim</strong>. Mattis
									mauris semper sed amet vitae sed turpis id.
									Id dolor praesent donec est. Odio penatibus
									risus viverra tellus varius sit neque erat
									velit. Faucibus commodo massa rhoncus,
									volutpat. Dignissim sed eget risus enim.
									<a href="#">Mattis mauris semper</a> sed
									amet vitae sed turpis id.
								</p>

								<ul>
									<li>
										Quis elit egestas venenatis mattis
										dignissim.
									</li>
									<li>
										Cras cras lobortis vitae vivamus
										ultricies facilisis tempus.
									</li>
									<li>
										Orci in sit morbi dignissim metus diam
										arcu pretium.
									</li>
								</ul>

								<p>
									Quis semper vulputate aliquam venenatis
									egestas sagittis quisque orci. Donec commodo
									sit viverra aliquam porttitor ultrices
									gravida eu. Tincidunt leo, elementum mattis
									elementum ut nisl, justo, amet, mattis. Nunc
									purus, diam commodo tincidunt turpis. Amet,
									duis sed elit interdum dignissim.
								</p>

								<h3>H3 Heading</h3>

								<p>
									Id orci tellus laoreet id ac. Dolor, aenean
									leo, ac etiam consequat in. Convallis arcu
									ipsum urna nibh. Pharetra, euismod vitae
									interdum mauris enim, consequat vulputate
									nibh. Maecenas pellentesque id sed tellus
									mauris, ultrices mauris. Tincidunt enim
									cursus ridiculus mi. Pellentesque nam sed
									nullam sed diam turpis ipsum eu a sed
									convallis diam.
								</p>

								<blockquote>
									<p>
										Sagittis scelerisque nulla cursus in
										enim consectetur quam. Dictum urna sed
										consectetur neque tristique
										pellentesque. Blandit amet, sed aenean
										erat arcu morbi.
									</p>
								</blockquote>
								<p>
									Faucibus commodo massa rhoncus, volutpat.
									Dignissim sed eget risus enim. Mattis mauris
									semper sed amet vitae sed turpis id. Id
									dolor praesent donec est. Odio penatibus
									risus viverra tellus varius sit neque erat
									velit.
								</p>

								<h4>H4 Heading</h4>
								<p>
									Purus morbi dignissim senectus mattis{" "}
									<a href="#">adipiscing</a>. Amet, massa quam
									varius orci dapibus volutpat cras. In amet
									eu ridiculus leo sodales cursus tristique.
									Tincidunt sed tempus ut viverra ridiculus
									non molestie. Gravida quis fringilla amet
									eget dui tempor dignissim. Facilisis auctor
									venenatis varius nunc, congue erat ac. Cras
									fermentum convallis quam.
								</p>

								<p>
									Faucibus commodo massa rhoncus, volutpat.
									Dignissim sed eget risus enim. Mattis mauris
									semper sed amet vitae sed turpis id. Id
									dolor praesent donec est. Odio penatibus
									risus viverra tellus varius sit neque erat
									velit.
								</p>

								<ol>
									<li>
										Quis elit egestas venenatis mattis
										dignissim.
									</li>
									<li>
										Cras cras lobortis vitae vivamus
										ultricies facilisis tempus.
									</li>
									<li>
										Orci in sit morbi dignissim metus diam
										arcu pretium.
									</li>
								</ol>

								<p>
									Faucibus commodo massa rhoncus, volutpat.
									Dignissim sed eget risus enim. Mattis mauris
									semper sed amet vitae sed turpis id. Id
									dolor praesent donec est. Odio penatibus
									risus viverra tellus varius sit neque erat
									velit.
								</p>
								<Column cols="2">
									<p className="bg-slate-400">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Proin vulputate
										malesuada lectus at sollicitudin. Fusce
										in lobortis leo. Nulla fringilla neque
										eu blandit molestie.
									</p>
									<p className="bg-slate-400">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Proin vulputate
										malesuada lectus at sollicitudin. Fusce
										in lobortis leo. Nulla fringilla neque
										eu blandit molestie.
									</p>
								</Column>
								<Column cols="3">
									<p className="bg-slate-400">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Proin vulputate
										malesuada lectus at sollicitudin. Fusce
										in lobortis leo. Nulla fringilla neque
										eu blandit molestie.
									</p>
									<p className="bg-slate-400">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Proin vulputate
										malesuada lectus at sollicitudin. Fusce
										in lobortis leo. Nulla fringilla neque
										eu blandit molestie.
									</p>
									<p className="bg-slate-400">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Proin vulputate
										malesuada lectus at sollicitudin. Fusce
										in lobortis leo. Nulla fringilla neque
										eu blandit molestie.
									</p>
								</Column>
							</article>
						</section>
					</Column>
				</Container>
			</main>

			<FooterBasic />
		</>
	);
};

export default CuTheme;
