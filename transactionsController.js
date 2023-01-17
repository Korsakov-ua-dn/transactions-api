import TransactionsService from "./transactionsService.js";

class TransactionsController {
    async create(req, res) {
        try {
            const transactions = await TransactionsService.create(req.body)
            res.json({
                "requestId": transactions._id
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const { limit, skip } = req.query;
            const transactions = await TransactionsService.getAll(Number(limit), Number(skip));
            return res.json(transactions);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new TransactionsController();
