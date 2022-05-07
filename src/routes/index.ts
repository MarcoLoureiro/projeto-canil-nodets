import { Router } from "express";
import * as HomeController from "../controllers/homeController";
import * as SearchController from "../controllers/searchController";
import * as DetailsController from '../controllers/detailsController';
const router = Router();


router.get('/',HomeController.home);
router.get('/dogs',HomeController.dogs);
router.get('/cats',HomeController.cats);
router.get('/fishes',HomeController.fishes);

router.get('/search',SearchController.search);

router.post('/details-pet',DetailsController.details);


export default router;