import React from 'react';

const NumberedPages = ({ pagesCount, page, goPage }) => {
  const pages = [];
  let result = [];
  if (pagesCount > 10) {
    if (page > 4) {
      pages.push(1, 2);
    }
    if (page - 3 - 2 > 1) {
      pages.push('a');
    }
    pages.push(
      ...[
        page - 3,
        page - 2,
        page - 1,
        page,
        page + 1,
        page + 2,
        page + 3,
        'b',
        pagesCount - 2,
        pagesCount - 1,
        pagesCount
      ]
    );
    result = [...new Set(pages.filter(elem => (elem > 0 && elem <= pagesCount) || typeof elem === 'string'))];
    if (typeof result[result.length - 1] === 'string') {
      result.pop();
    }
  } else {
    result = Array.from({ length: pagesCount }, (_, i) => i + 1);
  }

  return result.map(page => {
    if (typeof page === 'number') {
      return (
        <button
          key={page + Math.random()}
          onClick={() => goPage(page)}
          key={page}
          href="#"
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          {page}
        </button>
      );
    }
    return (
      <span
        key={page + Math.random()}
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700"
      >
        ...
      </span>
    );
  });
};

export default NumberedPages;
