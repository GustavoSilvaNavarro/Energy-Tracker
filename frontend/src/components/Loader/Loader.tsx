import { ClipLoader } from 'react-spinners';

import './Loader.css';

export const Loader = ({ status }: { status: boolean }) => {
  return (
    <div className={`loaderContainer__onChange ${status === false ? 'displayLoader' : ''}`}>
      <div className="flex h-full flex-col justify-center items-center">
        <ClipLoader color="#fff" size={75} speedMultiplier={1} loading={status ? true : false} />
        <h3 className="text-white spinnerLoader__title text-base">Loading...</h3>
      </div>
    </div>
  );
};
