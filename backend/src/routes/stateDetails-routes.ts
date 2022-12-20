import { Router } from 'express';

import { retrieveListStates, storeListOfStatesDB } from '../controllers/stateDetails-controllers';

const router = Router();

router.get('/details', retrieveListStates);
router.get('/list-states', storeListOfStatesDB); //? To get details

export default router;
