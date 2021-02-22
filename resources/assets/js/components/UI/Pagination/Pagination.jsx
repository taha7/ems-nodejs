import React from 'react';
import NumberedPages from './NumberedPages.jsx';

const utilities = (() => {
  const prevNextButtons =
    'relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 focus:z-10 hover:text-gray-400';
  return {
    'prev-btn': prevNextButtons + ' rounded-l-md',
    'next-btn': prevNextButtons + ' -ml-px rounded-r-md'
  };
})();

const Pagination = ({ options, goPage }) => {
  const perPage = Number(options.perPage);
  const page = Number(options.page);
  const total = Number(options.total);
  const pagesCount = Math.ceil(total / perPage);

  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= pagesCount;

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            Showing
            <span className="font-medium"> {(page - 1) * perPage + 1} </span>
            to
            {/* FIXME: */}
            <span className="font-medium"> {page * perPage > total ? total : page * perPage} </span>
            of
            <span className="font-medium"> {options.total} </span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            {/* Prev Button */}
            <button
              onClick={() => (isPrevDisabled ? {} : goPage(page - 1))}
              href="#"
              className={
                utilities['prev-btn'] +
                (isPrevDisabled ? ' text-gray-500 cursor-not-allowed' : ' text-gray-600')
              }
              aria-label="Previous"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Numbered Buttons */}
            <NumberedPages pagesCount={pagesCount} page={page} goPage={goPage} />
            <button
              disabled={isNextDisabled}
              onClick={() => goPage(page + 1)}
              href="#"
              className={
                utilities['next-btn'] +
                (isNextDisabled ? ' text-gray-500 cursor-not-allowed' : ' text-gray-600')
              }
              aria-label="Next"
            >
              {/* <!-- Heroicon name: chevron-right --> */}
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
