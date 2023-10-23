import { ITransaction } from "@/types";
import moment from "moment";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const Transaction: ITransaction[] = [
    {
      id: '112',
      title: 'Snack',
      amount: 10000,
      date: moment.utc().format('YYYY-MM-DDTHH:mm:ss'),
      type: 'expense'
    },
    {
      id: '122',
      title: 'Freelance',
      amount: 100000,
      date: moment.utc().format('YYYY-MM-DDTHH:mm:ss'),
      type: 'income'
    }
  ]

  return (
    <>
      <TransactionItem items={Transaction} />
      <div className="flex justify-center py-2">------</div>
      <TransactionItem items={Transaction} />
    </>
  )
}