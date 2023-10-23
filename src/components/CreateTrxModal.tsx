import { useState } from "react";
import TextField from "./base/TextField";
import Button from "./base/Button";
import Select from "./base/Select";

export default function CreateTrxModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <div className="rounded-lg bg-white p-5 w-[400px] max-w-screen m-3">
              <h3 className="font-semibold text-lg mb-5">Add new Income or Expense</h3>
              <div className="mb-4">
                <label htmlFor="title">Title</label>
                <TextField type="text" placeholder="Snack" id="title" />
              </div>
              <div className="mb-4">
                <label htmlFor="date">Date</label>
                <TextField type="date" placeholder="14 October 2023" id="date" />
              </div>
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label htmlFor="type">Type</label>
                    <Select id="type">
                      <option value="" disabled selected>Select Type</option>
                      <option value="income">Income</option>
                      <option value="expense">Expense</option>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="amount">Amount</label>
                    <TextField type="number" placeholder="Rp.100,000" id="amount" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <Button className="text-[#12486B] flex-1" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button className="text-white bg-[#12486B] flex-1">Add</Button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}