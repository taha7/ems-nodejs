import React, { useState } from 'react';

const Dropdown = ({ list, classes, title, listDir }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  return (
    <div className={`relative h-full ${classes || ''}`} onMouseLeave={() => setIsListVisible(false)}>
      {/* dropdown-title */}
      <div className="text-xs cursor-pointer h-full items-center flex" onMouseEnter={() => setIsListVisible(true)}>
        {title()}
      </div>
      {/* dropdown-list  */}
      {isListVisible && (
        <div className={`absolute z-40 origin-top-right ${listDir}-0 -mt-1 w-64 rounded shadow-lg py-1 bg-white`}>
          {list.map((elem, $index) => (
            <a key={$index} className="mt-1 text-gray-700 text-sm px-4 py-2 hover:bg-gray-100 block" href={elem.go()}>
              {elem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
