import { Fragment, useState } from "react";
import GradientDiv from "../Gradient/GradientDiv";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Form from "../Form/Form";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

const navigation = [
  {
    name: "Settings",
    href: "/intranet/settings",
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "Admin Settings",
    href: "/intranet/settings/admin",
    icon: UserCircleIcon,
    current: false,
  },
];

const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Apps", href: "#", current: false },
  { name: "Links", href: "#", current: false },
  { name: "Benefits", href: "#", current: false },
  { name: "Payforms", href: "#", current: false },
  { name: "Job Setup", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Settings() {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);

  return (
    <>
      <div className="relative h-60">
        <header className="relative py-10 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-cu-black:900 text-3xl font-medium tracking-tight">
              Settings
            </h1>
          </div>
        </header>
      </div>
      <main className="relative -mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden  rounded-lg border bg-white">
            <div className="divide-y divide-gray-100 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-cu-black:900 border-l-4 border-cu-red bg-gray-50 hover:bg-teal-50 hover:text-green-700"
                          : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500 group-hover:text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="lg:col-span-9">
                {/* Tabs */}
                <div className="border-b border-gray-100 p-6 lg:hidden">
                  <label htmlFor="selected-tab" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="selected-tab"
                    name="selected-tab"
                    className="mt-1 block w-full rounded-md border-gray-100 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden px-6 py-2 lg:block">
                  <div className="border-b border-gray-100">
                    <nav className="-mb-px flex space-x-8">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? "text-cu-black:900 border-cu-red"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-cu-red",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                <Form />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
