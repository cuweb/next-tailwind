import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from '../_rds-final/components/Navbar/CuTheme';
import Footer from '../_rds-final/components/Footer/FooterStandard/FooterStandard';
import Container from '../_rds-final/layouts/Container/Container';
import Column from '../_rds-final/layouts/Columns/Columns';
import BaseBanner from '../_rds-final/components/Banner/BaseBanner/BaseBanner';

import {
  CalendarDaysIcon,
  UsersIcon,
  GlobeAltIcon,
  TableCellsIcon,
  WrenchScrewdriverIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    uni: 'Carleton',
    name: 'Events Calendar',
    link: '/events',
    color: 'bg-cu-red',
    icon: CalendarDaysIcon,
  },
  {
    id: 2,
    uni: 'Carleton',
    name: 'Intranet',
    link: '/intranet',
    color: 'bg-blue-800',
    icon: UsersIcon,
  },
  {
    id: 3,
    uni: 'Carleton',
    name: 'cuTheme',
    link: '/cutheme',
    color: 'bg-cyan-600',
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    uni: 'RDS',
    name: 'Layouts & Spacing',
    link: '/layouts',
    color: 'bg-green-700',
    icon: TableCellsIcon,
  },
  {
    id: 5,
    uni: 'Carleton',
    name: 'Miscellaneous',
    link: '/misc',
    color: 'bg-cu-black-700',
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 6,
    uni: 'Carleton',
    name: 'Dashboard',
    link: '/dashboard',
    color: 'bg-indigo-700',
    icon: Cog8ToothIcon,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carleton University | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <BaseBanner>Web Services Prototypes</BaseBanner>

      <main>
        <Container>
          <Column>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                >
                  <dt>
                    <div className={`${project.color} absolute rounded-md p-3`}>
                      <project.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-500">
                      {project.uni}
                    </p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p className="text-2xl font-semibold text-gray-900">
                      {project.name}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                      <div className="text-sm">
                        <a
                          href={project.link}
                          className="font-medium text-cu-red hover:text-cu-red-800 hover:underline"
                        >
                          {' '}
                          View prototypes
                        </a>
                      </div>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </Column>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Home;
