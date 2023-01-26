import { Container } from "rds-tailwind";
import NewsListItem from "../_components/News/NewsListItem";

const styles = {
	oneColBorder: `[&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
	twoColBorder: `[&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export default function NewsListingContent() {
	return (
		<>
			<h2>H2 Heading</h2>
			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
				<div
					className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
				>
					<NewsListItem />
				</div>
			</div>
			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius. Phasellus dignissim sodales
				feugiat.
			</p>
			<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
				<div
					className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
				>
					<NewsListItem />
					<NewsListItem />
					<NewsListItem />
				</div>
			</div>
			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius. Phasellus dignissim sodales
				feugiat.
			</p>

			<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
				<div
					className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
				>
					<NewsListItem />
					<NewsListItem />
					<NewsListItem />
					<NewsListItem />
				</div>
			</div>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius. Phasellus dignissim sodales
				feugiat.
			</p>

			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>

			<Container bgColor="grey">
				<div className="max-w-5xl mx-auto">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100 bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-1 ${styles.oneColBorder}`}
						>
							<NewsListItem />
							<NewsListItem />
							<NewsListItem />
						</div>
					</div>
				</div>
			</Container>

			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit. Phasellus et lectus elementum,
				dictum odio quis, euismod augue. Nulla ultricies orci eu
				volutpat mollis. Aenean mauris leo, congue id laoreet vitae,
				bibendum at dui. Proin ac aliquet enim, a ullamcorper tortor. Ut
				mattis, ante id porttitor elementum, lorem mauris rutrum enim,
				ut tristique est est at turpis. Nam hendrerit luctus ex, ac
				rhoncus mauris pretium varius. Phasellus dignissim sodales
				feugiat.
			</p>

			<Container bgColor="grey">
				<div className="max-w-5xl mx-auto">
					<div className="cu-panel not-prose overflow-hidden rounded-lg border border-cu-black-100  bg-white shadow-lg [&+.cu-panel]:mt-8">
						<div
							className={`grid overflow-hidden md:grid-cols-2 ${styles.twoColBorder}`}
						>
							<NewsListItem />
							<NewsListItem />
							<NewsListItem />
							<NewsListItem />
						</div>
					</div>
				</div>
			</Container>

			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<p>
				Quis semper vulputate aliquam venenatis egestas sagittis quisque
				orci. Donec commodo sit viverra aliquam porttitor ultrices
				gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
				justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
				Amet, duis sed elit interdum dignissim.
			</p>
			<p>
				Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
				risus enim. Mattis mauris semper sed amet vitae sed turpis id.
				Id dolor praesent donec est. Odio penatibus risus viverra tellus
				varius sit neque erat velit.
			</p>
		</>
	);
}
