import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import Header from '../../components/UI/Header/Header.jsx';
import Pagination from '../../components/UI/Pagination/Pagination.jsx';

const utilities = {
  th: 'px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider',
  td: 'px-6 py-2 text-sm whitespace-no-wrap'
};

const renderThead = () => (
  <thead>
    <tr>
      <th className={utilities.th}>ID</th>
      <th className={utilities.th}>Title</th>
      <th className={utilities.th}>Name</th>
      <th className={utilities.th}>Company Name</th>
      <th className={utilities.th}>Client Type</th>
      <th className={utilities.th}>Available Slots</th>
    </tr>
  </thead>
);

const AvailableSlotsDetails = () => {
  const [rows, setRows] = useState(null);
  const [paginationOptions, setPaginationOptions] = useState({});

  const renderData = (page = 1) => {
    axios
      .get('/admin/reports/api/available-slots-details', { params: { page, perPage: 50 } })
      .then(({ data }) => {
        console.log(data);
        setRows(data.data);
        setPaginationOptions(data.meta);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => renderData(), []);

  const onGoPage = page => renderData(page);

  return (
    <>
      <Header />
      {rows && (
        <div className="px-8 my-6">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    {renderThead()}
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rows.map(row => (
                        <tr key={row.id}>
                          <td className={utilities.td}>{row.id}</td>
                          <td className={utilities.td}>{row.title}</td>
                          <td className={utilities.td}>{row.name}</td>
                          <td className={utilities.td}>{row.company}</td>
                          <td className={utilities.td}>{row.client_type}</td>
                          <td className={utilities.td}>
                          {/* {row.available_slots.map((slot, $index) => (<span key={row.id + '' + slot.id}>{slot.start_time} {$index == row.available_slots.length - 1 ? '' : ', '}</span>))} */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination options={paginationOptions} goPage={onGoPage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

if (document.getElementById('available-slots-details')) {
  ReactDom.render(<AvailableSlotsDetails />, document.getElementById('available-slots-details'));
}
