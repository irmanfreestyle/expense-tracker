import { useState } from "react";
import TextField from "./base/TextField";
import Button from "./base/Button";
import Select from "./base/Select";
import { ITransaction } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { transactionService } from "@/service/transaction.service";

export default function CreateTrxModal() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ITransaction>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const createTransaction: SubmitHandler<ITransaction> = data => {
    transactionService.add(data);
  }

  return (
    <>
      <div className="absolute bottom-0 left-0 w-full h-[50px] flex justify-center">
        <button onClick={() => setIsOpen(true)} className="rounded-full bg-[#419197] w-[50px] mt-[-25px] h-[50px] flex items-center justify-center shadow-xl border border-green-700">
          <i className="material-icons text-white">add</i>
        </button>
      </div>

      {
        isOpen && (
          <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-gray-800 bg-opacity-90">
            <form onSubmit={handleSubmit(createTransaction)} className="rounded-lg bg-white p-5 w-[400px] max-w-screen m-3">
              <h3 className="font-semibold text-lg mb-5">Add new Transaction</h3>
              <div className="mb-4">
                <label htmlFor="title">Title</label>
                <input type="text" />
                <TextField type="text" placeholder="Snack" id="title" {...register('title')} />
              </div>
              <div className="mb-4">
                <label htmlFor="date">Date</label>
                <TextField type="date" placeholder="14 October 2023" id="date" {...register('date')} />
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label htmlFor="type">Type</label>
                    <Select defaultValue={''} id="type" {...register('type')}>
                      <option value="" disabled>Select Type</option>
                      <option value="income">Income</option>
                      <option value="expense">Expense</option>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="amount">Amount</label>
                    <TextField type="number" placeholder="Rp.100,000" id="amount" {...register('amount')} />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <Button className="text-[#12486B] flex-1" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button className="text-white bg-[#12486B] flex-1" type="submit">Add</Button>
              </div>
            </form>
          </div>
        )
      }
    </>
  )
}