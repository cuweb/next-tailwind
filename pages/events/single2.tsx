import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../../_rds-final/components/Footer/FooterStandard/FooterStandard';
import Navbar from '../../_rds-final/components/Navbar/EventNavbar';
import Column from '../../_rds-final/layouts/Columns/Columns';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  CalendarDaysIcon,
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  TrashIcon,
  UserPlusIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: '405 Robertson Hall',
    description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
    icon: MapPinIcon,
  },
  {
    name: 'Wednesday, October 2nd, 2022',
    description: '2:00PM - 10:00PM',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Person McPersonface',
    description: '613-266-2628 / mcorkum@gmail.com',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Cost',
    description: '$100,0000',
    icon: CurrencyDollarIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const EventCalendar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Event Calendar | Carleton University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <header className="relative mx-auto max-w-7xl px-8">
        <h1 className="mt-10 text-4xl font-semibold text-cu-black-800 md:mt-14 md:text-5xl">
          Milestone Anniversary Celebration 2022
        </h1>
        <dl className="mt-10 space-y-0 md:mt-14 md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-0 md:space-y-0">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative border border-cu-black-50 bg-gray-50 p-4"
            >
              <dt>
                <div className="absolute flex h-12 w-12 justify-center text-cu-blue-300">
                  <feature.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="text-md ml-16 font-bold leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <main className="mx-auto max-w-7xl pb-14 md:pb-0">
        <Column.TwoThird>
          <div className="relative mt-0 overflow-hidden bg-white">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-prose text-lg">
                <h2>
                  <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Interesting Event Heading
                  </span>
                </h2>
                <p className="mt-8 text-xl leading-8 text-gray-500">
                  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                  sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                  id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                  scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
              </div>
              <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                <p>
                  Faucibus commodo massa rhoncus, volutpat.{' '}
                  <strong>Dignissim</strong> sed{' '}
                  <strong>eget risus enim</strong>. Mattis mauris semper sed
                  amet vitae sed turpis id. Id dolor praesent donec est. Odio
                  penatibus risus viverra tellus varius sit neque erat velit.
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. <a href="#">Mattis mauris semper</a> sed amet
                  vitae sed turpis id.
                </p>
                <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Quis semper vulputate aliquam venenatis egestas sagittis
                  quisque orci. Donec commodo sit viverra aliquam porttitor
                  ultrices gravida eu. Tincidunt leo, elementum mattis elementum
                  ut nisl, justo, amet, mattis. Nunc purus, diam commodo
                  tincidunt turpis. Amet, duis sed elit interdum dignissim.
                </p>
                <h2>Could these headings be more interesting?</h2>
                <p>
                  Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                  consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                  euismod vitae interdum mauris enim, consequat vulputate nibh.
                  Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                  Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
                  nullam sed diam turpis ipsum eu a sed convallis diam.
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
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
                <h2>No, they are maximum interesting</h2>
                <p>
                  Purus morbi dignissim senectus mattis{' '}
                  <a href="#">adipiscing</a>. Amet, massa quam varius orci
                  dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
                  tristique. Tincidunt sed tempus ut viverra ridiculus non
                  molestie. Gravida quis fringilla amet eget dui tempor
                  dignissim. Facilisis auctor venenatis varius nunc, congue erat
                  ac. Cras fermentum convallis quam.
                </p>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit.
                </p>
              </div>
            </div>
          </div>
          <aside>
            <button
              type="button"
              className="mb-4 w-full items-center rounded-md border border-transparent bg-cu-red p-6 text-lg font-medium text-white shadow-sm last:mb-0 hover:bg-cu-blue focus:outline-none focus:ring-2 focus:ring-cu-blue-100 focus:ring-offset-2"
            >
              Register Now <span aria-hidden="true"> &rarr;</span>
            </button>
            <button
              type="button"
              className="mb-4 w-full items-center rounded-md border border-transparent bg-cu-blue-600 p-6 text-lg font-medium text-white shadow-sm last:mb-0  hover:bg-cu-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-cu-blue-100 focus:ring-offset-2"
            >
              Add to My Events <span aria-hidden="true"> &rarr;</span>
            </button>

            <div className="mt-3 rounded-md shadow sm:mt-0">
              <Menu as="div" className="relative inline-block w-full text-left">
                <div>
                  <Menu.Button className="flex w-full items-center justify-center rounded-md border-2 border-cu-red bg-white p-6 text-base font-medium text-cu-red hover:bg-cu-red hover:text-white md:text-lg">
                    <ShareIcon className="mr-2 h-7 w-7" aria-hidden="true" />
                    Share
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-1/4 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:right-0">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="currentColor"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                            Twitter
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              fill="currentColor"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            >
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                            LinkedIn
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              fill="currentColor"
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            >
                              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                            Facebook
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            <EnvelopeIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            E-mail
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            <CalendarDaysIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Add To Calendar (ICS)
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </aside>
        </Column.TwoThird>

        <Column.One>
          <div className="overflow-hidden rounded-lg bg-cu-black-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
              width="100%"
              height="500"
              style={{ border: 0 }}
              // allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Column.One>
      </main>

      {/* <header className="pt-12 mx-auto max-w-7xl md:py-24">
				<Column.TwoThird>
					<div className="items-center max-w-3xl">
						<h1 className="text-4xl font-semibold text-cu-black-800 md:text-5xl">
							Milestone Anniversary Celebration 2022
						</h1>
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
							Anim aute id magna aliqua ad ad non deserunt sunt.
							Qui irure qui lorem cupidatat commodo. Elit sunt
							amet fugiat veniam occaecat fugiat aliqua ad ad non
							deserunt sunt.
						</p>
					</div>

					<div className="overflow-hidden rounded-lg">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.1407807835403!2d-75.69560014816834!3d45.38633087899766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05dee0ae65eb%3A0x17feb47012b59f30!2sCarleton%20University%20Raven&#39;s%20Nest!5e0!3m2!1sen!2sca!4v1664032553405!5m2!1sen!2sca"
							width="100%"
							height="300"
							style={{ border: 0 }}
							// allowfullscreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</Column.TwoThird>
			</header> */}

      <Footer />
    </>
  );
};

export default EventCalendar;
