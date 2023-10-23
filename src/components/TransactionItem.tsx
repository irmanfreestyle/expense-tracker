import { ITransaction } from "@/types";
interface IProps {
  items: ITransaction[]
}

export default function TransactionItem(props: IProps) {
  return (
    <div className="rounded-lg p-5 bg-[#12486B] flex flex-col gap-5 mt-1">
      <h5 className="text-lg font-bold text-white">October 2023</h5>

      {/* LIST ITEM */}
      <section className="flex flex-col gap-3 text-sm">
        <div className="bg-[#F5FCCD] p-4 flex items-center justify-between rounded-lg">
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[#12486B]">Snack</h5>
            <span className="font-light text-gray-500">14 October 2023</span>
          </div>
          <div className="text-red-700">Rp 10,000</div>
        </div>
        <div className="bg-[#F5FCCD] p-4 flex items-center justify-between rounded-lg">
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[#12486B]">Snack 1</h5>
            <span className="font-light text-gray-500">14 October 2023</span>
          </div>
          <div className="text-red-700">Rp 10,000</div>
        </div>
        <div className="bg-[#F5FCCD] p-4 flex items-center justify-between rounded-lg">
          <div className="flex flex-col gap-1">
            <h5 className="font-semibold text-[#12486B]">Freelance</h5>
            <span className="font-light text-gray-500">14 October 2023</span>
          </div>
          <div className="text-green-700">Rp 100,000,000</div>
        </div>
      </section>
      {/* END LIST ITEM */}

      <section className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Income</span>
          <span className="text-green-500">Rp.100,000,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white font-bold">Total Expense</span>
          <span className="text-red-500">Rp.10,000</span>
        </div>
      </section>
    </div>
  )
}