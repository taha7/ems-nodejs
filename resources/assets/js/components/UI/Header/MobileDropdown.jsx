import React, { useState } from 'react';

const MobileDropdown = ({ title, list }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  return (
    <>
      <div onClick={() => setIsListVisible(!isListVisible)} className="flex cursor-pointer">
        <span className="mr-auto">{title()}</span>
        {<i className={`fas fa-arrow-${isListVisible ? 'up' : 'down'}`}></i>}
      </div>
      {isListVisible && (
        <div className="pl-4 py-1">
          {list.map((elem, $index) => (
            <a
              key={$index}
              href={elem.go()}
              className="p-2 block text-base font-normal rounded hover:bg-gray-600"
            >
              {elem.title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileDropdown;
