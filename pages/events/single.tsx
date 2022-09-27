import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../../_rds-final/components/Footer/FooterStandard/FooterStandard';
import Navbar from '../../_rds-final/components/Navbar/EventNavbar';
import Column from '../../_rds-final/layouts/Columns/Columns';

import { ShareIcon } from '@heroicons/react/24/outline';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  CalendarDaysIcon,
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
  CurrencyDollarIcon,
  MapPinIcon,
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
    description: '$100,0000.99',
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
      <div className="relative bg-gray-800 pt-24 pb-24 md:pb-28 md:pt-28">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
            alt=""
          />
          <div
            className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <main className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Lived Experience Luncheon Series with Dr. Alex Auerbach
            </h1>
            <div className="mx-auto mt-12 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cu-red px-6 py-4 text-lg font-medium text-white shadow-sm last:mb-0 hover:bg-cu-blue focus:outline-none focus:ring-2 focus:ring-cu-blue-100 focus:ring-offset-2"
                >
                  Register
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-cu-blue-600 px-6 py-4 text-lg font-medium text-white shadow-sm last:mb-0  hover:bg-cu-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-cu-blue-100 focus:ring-offset-2"
                >
                  Add to My Events
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Menu
                  as="div"
                  className="relative inline-block w-full text-left"
                >
                  <div>
                    <Menu.Button className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-6 py-4 text-base font-medium text-cu-black-700 hover:bg-gray-50 md:py-4 md:px-4 md:text-lg">
                      <ShareIcon className="mr-2 h-7 w-7" aria-hidden="true" />
                      <span className="sr-only">Share</span>
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
                              <PencilSquareIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Edit
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
                              <DocumentDuplicateIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Duplicate
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
                              <ArchiveBoxIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Archive
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
                              <ArrowRightCircleIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Move
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
                              <UserPlusIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Share
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
                              <HeartIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Add to favorites
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
                              <TrashIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Delete
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </main>
      </div>

      <main>
        <Column.One>
          <dl className="mt-6 space-y-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 md:space-y-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-md bg-gray-100 p-4 shadow"
              >
                <dt>
                  <div className="absolute top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-md bg-cu-red text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-md ml-8 font-bold leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="ml-8 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-6 overflow-hidden bg-white">
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
                <h2>From beginner to expert in 30 days</h2>
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
                <h2>Everything you need to get up and running</h2>
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

          <div className="mt-6 overflow-hidden rounded-lg bg-cu-black-50">
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
