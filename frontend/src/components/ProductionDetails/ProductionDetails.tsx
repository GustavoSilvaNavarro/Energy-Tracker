import './ProductionDetails.css';

import { IProductionOilByState } from '../../types/app-types';

type IProps = IProductionOilByState;
type IDetails = {
  unit: string;
  title: string;
};

export const ProductionDetails = ({ production, details }: { production: IProps[]; details: IDetails }) => {
  if (!Array.isArray(production) || production.length < 1) {
    return (
      <div>
        <p>Information did not load!</p>
      </div>
    );
  }

  return (
    <div className="tableInfoContainer">
      <h3 className="text-center text-white font-semibold">{details.title}</h3>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Area
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                Total ({details.unit})
              </th>
            </tr>
          </thead>
          <tbody className="tableContainer__body">
            {production.map(item => (
              <tr
                key={item.area}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.area}
                </th>
                <td className="py-4 px-6 text-xs">{item.description}</td>
                <td className="py-4 px-6 text-xs">{item.product}</td>
                <td className="py-4 px-6 text-xs">
                  {item.total.toLocaleString('en-US')} {details.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
