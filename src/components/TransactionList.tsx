import { IGroupTransaction } from "@/types";
import MonthCard from "./MonthCard";

type Props = {
  groupedTransactions: IGroupTransaction[]
}

export default function TransactionList({ groupedTransactions }: Props) {
  return groupedTransactions.map(trx => {
    return (
      <div key={trx.month}>
        <MonthCard items={trx.transactions} />
        <div className="flex justify-center py-2">------</div>
      </div>
    )
  })
}