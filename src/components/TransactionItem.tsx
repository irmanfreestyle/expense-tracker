import { transactionService } from "@/service/transaction.service";
import { ITransaction } from "@/types";
import { toDate, toRupiah } from "@/utils";
import moment from "moment";

type Props = {
  items: ITransaction[]
}

export default function TransactionItem(props: Props) {
  const { items } = props;
  const totalIncome = items.reduce((prev, curr) => {
    if (curr.type === 'income') return Number(prev) + Number(curr.amount);
    else return Number(prev);
  }, 0)

  const totalExpense = items.reduce((prev, curr) => {
    if (curr.type === 'expense') return Number(prev) + Number(curr.amount);
    else return Number(prev);
  }, 0)
  console.log(totalExpense)

  return (
    <div className="rounded-lg p-5 bg-[#12486B] flex flex-col gap-5 mt-1">
      <h5 className="text-lg font-bold text-white">{moment(items[0].date).format('MMMM YYYY')}</h5>

      {/* LIST ITEM */}
      <section className="flex flex-col gap-3 text-sm">
        {
          items.map(item => (
            <div className="bg-[#F5FCCD] p-4 flex items-center justify-between rounded-lg" key={item.id}>
              <div className="flex flex-col gap-1">
                <h5 className="font-semibold text-[#12486B]">{item.title}</h5>
                <span className="font-light text-gray-500">{toDate(item.date)}</span>
              </div>
              <div className={`${item.type === 'expense' ? 'text-red-700' : 'text-green-700'}`}>{toRupiah(item.amount)}</div>
            </div>
          ))
        }
      </section>
      {/* END LIST ITEM */}

      <section className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Income</span>
          <span className="text-green-500">{toRupiah(totalIncome)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Expense</span>
          <span className="text-red-500">{toRupiah(totalExpense)}</span>
        </div>
      </section>
    </div>
  )
}