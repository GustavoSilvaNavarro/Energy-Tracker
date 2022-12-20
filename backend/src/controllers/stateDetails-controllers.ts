import { Request, Response, NextFunction } from 'express';

import { getListStates, storeDetails } from '../models/daos/stateDetails-daos';

export const retrieveListStates = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await getListStates();
    res.status(200).json(list);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const storeListOfStatesDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await storeDetails();
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
