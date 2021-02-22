import React, { useState } from 'react';
import Toggle from '../HOC/Toggle.jsx';
import Dropdown from './Dropdown.jsx';
import MobileDropdown from './MobileDropdown.jsx';

const dropDownLinks = {
  scheduleReports: [{ title: 'Available Slot Details', go: () => '/admin/reports/show/available-slots-details' }]
};
const Header = () => {
  const [sidebarOpened, setSidbaOpened] = useState(false);
  return (
    <>
      <nav className="bg-gray-800">
        {/* desktop  */}
        <section className="hidden md:flex w-full h-16 px-6">
          <div className="l-links flex items-center h-full mr-auto">
            <Dropdown
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  {/* <i className="sm:text-xl lg:text-base fas fa-tachometer-alt"></i> */}
                  <i className="sm:text-xl lg:text-base fas fa-dot-circle"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Lookups <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-users"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    People <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-envelope-open-text"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Emails <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-calendar-alt"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Schedule <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-poll"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Survey <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-chart-line"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Registration Reports <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-chart-pie"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Schedule Reports <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="left"
              list={dropDownLinks.scheduleReports}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out font-medium px-4 py-2 rounded shadow-sm">
                  <i className="sm:text-xl lg:text-base fas fa-bug"></i>
                  <span className="whitespace-no-wrap sm:hidden lg:flex lg:items-center">
                    Error Reports <i className="fas fa-angle-down ml-1"></i>
                  </span>
                </div>
              )}
              listDir="right"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
          </div>
          <div className="r-links flex items-center h-full">
            <Dropdown
              title={() => (
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none text-gray-500 hover:text-indigo-500 transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
              )}
              listDir="right"
              list={[{ title: 'Your Profile', go: () => '#' }]}
            />
          </div>
        </section>
        {/* ================================= start mobile view =================================*/}
        <div className="flex md:hidden w-full h-16 bg-gray-800 text-gray-500">
          {/* Logo */}
          <div className="h-full flex items-center">
            <img
              className="block lg:hidden h-8 w-auto ml-6"
              src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
              alt="Workflow logo"
            />
          </div>
          {/* controls */}
          <div className="ml-auto flex items-center h-full">
            {/* bars */}
            <span
              onClick={() => setSidbaOpened(!sidebarOpened)}
              className="mr-4 cursor-pointer text-2xl hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              {sidebarOpened ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </span>
            <div className="h-full mr-4">
              {/* Profile control */}
              <Dropdown
                title={() => (
                  <button
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none  hover:text-indigo-500 transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>
                )}
                listDir="right"
                list={[{ title: 'Your Profile', go: () => '#' }]}
              />
            </div>
          </div>
        </div>
        {/* ================================= end mobile view =================================*/}
      </nav>
      {/* ========================= start left side mobile view =============================*/}
      {sidebarOpened && (
        <div className="flex flex-col px-6 pt-6 absolute md:hidden bg-gray-100 w-full min-h-full z-30">
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="fas fa-dot-circle mr-2"></i> Lookups
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-users"></i> People
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-envelope-open-text"></i> Emails
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-calendar-alt"></i> Schedule
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-poll"></i> Survey
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-chart-line"></i> Registration Reports
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-chart-pie"></i> Schedule Reports
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
          <div className="mb-8 text-lg">
            <h3 className="font-bold tracking-wide text-gray-500 text-sm uppercase">
              <i className="mr-2 fas fa-bug"></i> Error Reports
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles1
              </a>
              <a href="#" className="mt-4 text-gray-600 font-medium hover:text-gray-900">
                Adding Base Styles2
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
