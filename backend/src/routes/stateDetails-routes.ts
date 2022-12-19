import { Router } from 'express';

import { retrieveListStates } from '../controllers/stateDetails-controllers';

const router = Router();

router.get('/details', retrieveListStates);

export default router;
