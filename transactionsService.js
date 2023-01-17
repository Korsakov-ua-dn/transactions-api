import { Transactions } from "./Transactions.js";

class TransactionsService {
  async create(transactions) {
    const createdTransactions = await Transactions.create({ ...transactions });
    return createdTransactions;
  }

  async getAll(limit, skip) {
    const transactions = await Transactions.find().limit(limit).skip(skip);
    return transactions;
  }
}

export default new TransactionsService();
