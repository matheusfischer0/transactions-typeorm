import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<Transaction> {
    // TODO
    const transactionRepository = getRepository(Transaction);

    const transactionDeleted = await transactionRepository.findOne({ id });

    if (!transactionDeleted) {
      throw new AppError('Transaction id not found', 400);
    }
    await transactionRepository.delete(id);

    return transactionDeleted;
  }
}

export default DeleteTransactionService;
