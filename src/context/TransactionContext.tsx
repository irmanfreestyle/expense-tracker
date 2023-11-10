import { transactionService } from '@/service/transaction.service';
import { IGroupTransaction } from '@/types';
import { createContext, useState } from 'react';

interface IProps {
  children: React.ReactElement
}

interface ITransactionContext {
  groupedTransactions: IGroupTransaction[]
  setGroupedTransactions: (data: IGroupTransaction[]) => void
}

const initialTransactionContext: ITransactionContext = {
  groupedTransactions: [],
  setGroupedTransactions: () => {}, // Placeholder function
};

export const TransactionContext = createContext<ITransactionContext>(initialTransactionContext);

export default function TransactionProvider(props: IProps) {
  const [groupedTransactions, setGroupedTransactions] = useState<IGroupTransaction[]>(transactionService.get());

  return (
    <TransactionContext.Provider
      value={{
        groupedTransactions,
        setGroupedTransactions
      }}>
      { props.children }
    </TransactionContext.Provider>
  )
}