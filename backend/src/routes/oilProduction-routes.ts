import { Router } from 'express';

import { getOilProductionByMonth } from '../controllers/oilProduction-controllers';

const router = Router();

router.get('/oil-production', getOilProductionByMonth);

export default router;
