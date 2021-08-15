import { Router } from 'express'
import * as homeController from '../controllers/home'

const router = Router();

router.get('/', homeController.home);

export default router;