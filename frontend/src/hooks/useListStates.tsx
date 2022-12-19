import { useState, useEffect } from 'react';

import { getListOfStates } from '../services/stateDetails-fetch';
import { IStateDetails } from '../types/app-types';

type Status = 'unloaded' | 'loading' | 'loaded';

export const useListStates = () => {
  const [stateList, setStateList] = useState<Array<IStateDetails>>([]);
  const [status, setStatus] = useState<Status>('unloaded');

  useEffect(() => {
    void requestListOfStates();
  }, []);

  const requestListOfStates = async () => {
    setStateList([]);
    setStatus('loading');

    const list = await getListOfStates();

    if (list && list.length > 0) {
      setStateList(list);
      setStatus('loaded');
      return;
    }

    setStatus('unloaded');
    setStateList([]);
  };

  return [stateList, status] as [Array<IStateDetails>, Status];
};
