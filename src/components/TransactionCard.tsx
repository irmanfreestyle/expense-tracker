import { ITransaction } from "@/types";
import { toDate, toIDR } from "@/utils";
import React from "react";

interface IProps {
  item: ITransaction
}

const TransactionCard: React.FC<IProps> = ({ item }) => {
  return (
    <div className="bg-[#F5FCCD] p-4 flex items-center justify-between rounded-lg" key={item.id}>
      <div className="flex flex-col gap-1">
        <h5 className="font-semibold text-[#12486B]">{item.title}</h5>
        <span className="font-light text-gray-500">{toDate(item.date)}</span>
      </div>
      <div className={`${item.type === 'expense' ? 'text-red-700' : 'text-green-700'}`}>{toIDR(item.amount)}</div>
    </div>
  )
}

export default TransactionCard;