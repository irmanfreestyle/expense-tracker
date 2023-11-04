import moment from "moment";
import TransactionCard from "./TransactionCard";
import { toIDR } from "@/utils";
import { ITransaction } from "@/types";
import React from "react";

interface IProps {
  items: ITransaction[]
}

const MonthCard: React.FC<IProps> = ({ items }) => {
  const totalIncome: number = items.reduce((prev, curr) => {
    if (curr.type === 'income') return Number(prev) + Number(curr.amount);
    else return Number(prev);
  }, 0)

  const totalExpense: number = items.reduce((prev, curr) => {
    if (curr.type === 'expense') return Number(prev) + Number(curr.amount);
    else return Number(prev);
  }, 0)

  return (
    <div className="rounded-lg p-5 bg-[#12486B] flex flex-col gap-5 mt-1">
      <h5 className="text-lg font-bold text-white">{moment(items[0].date).format('MMMM YYYY')}</h5>

      {/* LIST ITEM */}
      <section className="flex flex-col gap-3 text-sm">
        {
          items.map(item => (
            <TransactionCard key={item.id} item={item} />
          ))
        }
      </section>
      {/* END LIST ITEM */}

      <section className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Income</span>
          <span className="text-green-500">{toIDR(totalIncome)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Expense</span>
          <span className="text-red-500">{toIDR(totalExpense)}</span>
        </div>
      </section>
    </div>
  )
}

export default MonthCard;