import { Router } from 'express'
import * as homeController from '../controllers/produtos'

const router = Router();

router.get('/crudprodutos', homeController.produtos);
router.post('/cadastroProduto', homeController.adicionaProduto);

export default router;