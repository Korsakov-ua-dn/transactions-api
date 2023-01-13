import { Transactions } from "./Transactions.js";

class TransactionsService {
  async create(transactions) {
    const createdTransactions = await Transactions.create({ ...transactions });
    return createdTransactions;
  }

  async getAll() {
    const transactions = await Transactions.find();
    return transactions;
  }
}

export default new TransactionsService();
