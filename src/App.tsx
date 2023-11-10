import { useContext } from "react";
import { transactionService } from "@/service/transaction.service";

import GreetingHeader from '@/components/GreetingHeader';
import TransactionList from './components/TransactionList';
import CreateTrxModal from './components/CreateTrxModal';
import { TransactionContext } from "./context/TransactionContext";

import listImg from '@assets/images/note-list.svg';

function App() {
  const { groupedTransactions, setGroupedTransactions } = useContext(TransactionContext);

  return (
    <div className="max-w-screen-sm h-screen relative mx-auto flex flex-col">
      <GreetingHeader />
      <div className="flex-1 overflow-auto p-3">
        {groupedTransactions.length ? <TransactionList groupedTransactions={groupedTransactions} /> : (
          <div className="flex flex-col justify-center items-center h-full">
            <img className="w-[150px]" src={listImg} alt="" />
            <div className="text-center mt-5 text-gray-700">Let's create your transactions</div>
          </div>
        )}
      </div>
      <CreateTrxModal onAddTransaction={() => setGroupedTransactions(transactionService.get())}/>
    </div>
  )
}

export default App
