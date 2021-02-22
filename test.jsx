<nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          aria-label="Main menu"
          aria-expanded="false"
        >
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg
            className="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="h-full flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:block sm:ml-6">
          <div className="flex items-center h-full">
            <Dropdown
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  {/* <i className="fas fa-tachometer-alt"></i> */}
                  <i className="fas fa-search"></i>
                  <span>Lookups</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-users"></i>
                  <span className="ml-1">People</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-envelope-open-text"></i>
                  <span className="ml-1">Emails</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-calendar-alt"></i>
                  <span className="ml-1">Schedule</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-poll"></i>
                  <span className="ml-1">Survey</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-chart-line"></i>
                  <span className="ml-1">Registration Reports</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-chart-pie"></i>
                  <span className="ml-1">Schedule Reports</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
            <Dropdown
              classes="ml-4"
              title={() => (
                <div className="flex items-center flex-col text-gray-300 font-medium hover:bg-gray-700 px-4 py-2 rounded shadow-sm">
                  <i className="fas fa-bug"></i>
                  <span className="ml-1">Error Reports</span>
                </div>
              )}
              listDir="left"
              list={[
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' },
                { title: 'Your Profile', go: () => '#' }
              ]}
            />
          </div>
        </div>
      </div>

      <div className="h-full absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          aria-label="Notifications"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <Dropdown
          classes="ml-4"
          title={() => (
            <button
              className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          )}
          listDir="right"
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
    </div>
  </div>

  <div className="sm:hidden">
    <div className="px-2 pt-2 pb-3">
      <a
        href="#"
        className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Team
      </a>
      <a
        href="#"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Projects
      </a>
      <a
        href="#"
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
      >
        Calendar
      </a>
    </div>
  </div>
</nav>;
// ----------------------------------
<div className="mobile sm:flex flex-col md:hidden w-full">
      <div className="flex w-full shadow bg-gray-900">
        <div>LOGO</div>
        <div className="ml-auto">CONTROLS</div>
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg bg-gray-900">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-search"></i>
              <span className="ml-2">Lookups</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-users"></i>
              <span className="ml-2">People</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-envelope-open-text"></i>
              <span className="ml-2">Emails</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-calendar-alt"></i>
              <span className="ml-2">Schedule</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-poll"></i>
              <span className="ml-2">Survey</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-chart-line"></i>
              <span className="ml-2">Registration Reports</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
               <i className="fas fa-chart-pie"></i>
              <span className="ml-2">Schedule Reports</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
      <div className="px-4 py-3 text-gray-100 rounded font-semibold text-lg">
        <MobileDropdown
          title={() => (
            <>
              <i className="fas fa-bug"></i>
              <span className="ml-2">Error Reports</span>
            </>
          )}
          list={[
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' },
            { title: 'Your Profile', go: () => '#' }
          ]}
        />
      </div>
    </div>
