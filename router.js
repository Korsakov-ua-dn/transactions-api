import Router from 'express'
import TransactionsController from "./transactionsController.js";

const router = new Router()

router.get('/transactions', TransactionsController.getAll);
router.post('/transactions', TransactionsController.create);

export default router;
