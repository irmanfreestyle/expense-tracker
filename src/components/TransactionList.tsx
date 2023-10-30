import { ITransaction } from "@/types";
import moment from "moment";
import TransactionItem from "./TransactionItem";
import { transactionService } from "@/service/transaction.service";

export default function TransactionList() {
  const groupedTransactions = transactionService.get();
  const groupList = Object.keys(groupedTransactions);

  return groupList.map(key => {
    const transactions: ITransaction[] = groupedTransactions[key];

    return (
      <div key={key}>
        <TransactionItem items={transactions} />
        <div className="flex justify-center py-2">------</div>
      </div>
    )
  })

  // REFACTOR LIST IT
}