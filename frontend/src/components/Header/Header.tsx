import { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { getMaxDate } from '../../helpers/app-functions';
import { ProductionContext } from '../../context/Production/ProductionContext';

export const Header = () => {
  const productionCtx = useContext(ProductionContext);
  const [currentDate, setCurrentDate] = useState(new Date('01/01/2020'));

  const handleDate = (date: Date) => {
    if (currentDate === date) return;
    setCurrentDate(date);
    if (productionCtx) {
      productionCtx.setLoadingStatus(true);
      void productionCtx.retrieveAPIInfo(date.getFullYear());
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-white font-semibold py-4">Welcome to Energy Tracker - USA</h1>
      <div className="py-3 px-4 bg-[#1f2937] rounded-md">
        <h2 className="text-white text-center font-semibold">Monthly Oil & Gas Production throughout USA</h2>
        <div className="flex items-center justify-end">
          <div className="w-[200px] mr-16">
            <label className="text-center text-white block" htmlFor="dateByYear">
              Year
            </label>
            <DatePicker
              id="dateByYear"
              disabled={productionCtx?.loadingStatus}
              className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              selected={currentDate}
              minDate={new Date('01/01/2000')}
              maxDate={new Date(getMaxDate())}
              onChange={(date: Date) => handleDate(date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
