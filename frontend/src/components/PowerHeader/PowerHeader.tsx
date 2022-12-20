import { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { getMaxDate } from '../../helpers/app-functions';
import { useListStates } from '../../hooks/useListStates';
import { GenerationContext } from '../../context/Generation/GenerationContext';

export const PowerHeader = () => {
  const generationCtx = useContext(GenerationContext);
  const [currentDate, setCurrentDate] = useState(new Date('01/01/2020'));
  const [state, setState] = useState('VT');
  const [stateList] = useListStates();

  const handleDate = (date: Date) => {
    if (currentDate === date) return;
    setCurrentDate(date);
    if (generationCtx) {
      generationCtx.setLoadingStatus(true);
      void generationCtx.retrieveGenerationData(date.getFullYear(), state);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (state === e.target.value) return;
    setState(e.target.value);
    if (generationCtx) {
      generationCtx.setLoadingStatus(true);
      void generationCtx.retrieveGenerationData(currentDate.getFullYear(), e.target.value);
    }
  };

  return (
    <div className="mt-8">
      <div className="py-3 px-4 bg-[#1f2937]">
        <h2 className="text-center text-white font-semibold">Monthly Power Generation by Sate</h2>
        <div className="flex items-center justify-around">
          <div className="inputSizes">
            <label className="text-center text-white block" htmlFor="dateByState">
              Year
            </label>
            <DatePicker
              id="dateByState"
              disabled={generationCtx?.loadingStatus}
              className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              selected={currentDate}
              minDate={new Date('01/01/2000')}
              maxDate={new Date(getMaxDate())}
              onChange={(date: Date) => handleDate(date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
          <div className="w-[200px]">
            <label className="text-center text-white block" htmlFor="stateSelectField">
              State
            </label>
            <select
              id="stateSelectField"
              disabled={generationCtx?.loadingStatus}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={state}
              onChange={e => handleSelectChange(e)}
            >
              {stateList.map(item => (
                <option key={item.id} value={item.postal}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
