import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';;

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.dogs);
router.get('/fishes', PageController.dogs);





export default router;
