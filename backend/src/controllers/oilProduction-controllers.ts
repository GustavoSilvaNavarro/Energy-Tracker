import { Request, Response, NextFunction } from 'express';

import { monthlyCrudeProduction } from '../services/openData-service';

export const getOilProductionByMonth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await monthlyCrudeProduction();

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
