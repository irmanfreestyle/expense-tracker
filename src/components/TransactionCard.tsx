import { TransactionContext } from "@/context/TransactionContext";
import { transactionService } from "@/service/transaction.service";
import { ITransaction } from "@/types";
import { toDate, toIDR } from "@/utils";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface IProps {
  item: ITransaction
}

const TransactionCard: React.FC<IProps> = ({ item }) => {
  const { setGroupedTransactions } = useContext(TransactionContext);
  const [showOption, setShowOption] = useState(false);
  const [optionIcon, setOptionIcon] = useState('keyboard_arrow_down');

  const onDelete = (id: string) => {
    Swal.fire({
      title: "Delete it?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        transactionService.delete(id);
        setGroupedTransactions(transactionService.get());
      }
    });
  };

  useEffect(() => {
    if (showOption) setOptionIcon('keyboard_arrow_up');
    else setOptionIcon('keyboard_arrow_down');
  }, [showOption])

  return (
    <div className="bg-[#F5FCCD] p-4 rounded-lg flex flex-col gap-3">
      <div className="flex justify-between" key={item.id}>
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold text-[#12486B]">{item.title}</h5>
          <span className="font-light text-gray-500">{toDate(item.date)}</span>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className={`${item.type === 'expense' ? 'text-red-700' : 'text-green-700'}`}>{toIDR(item.amount)}</div>
          <button className="leading-none" onClick={() => setShowOption(showOption => !showOption)}>
            <i className="material-icons">{optionIcon}</i>
          </button>
        </div>
      </div>

      {
        showOption && (
          <div className="border-t border-slate-500 flex justify-end pt-4 gap-3">
            <button className="text-green-500">Edit</button>
            <button className="text-red-500" onClick={() => onDelete(item.id)}>Hapus</button>
          </div>
        )
      }
    </div>
  )
}

export default TransactionCard;