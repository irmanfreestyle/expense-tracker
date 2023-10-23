import GreetingHeader from '@/components/GreetingHeader';
import TransactionList from './components/TransactionList';
import CreateTrxModal from './components/CreateTrxModal';

function App() {

  return (
    <div className="max-w-screen-sm h-screen relative mx-auto flex flex-col">
      <GreetingHeader />
      <div className="flex-1 overflow-auto p-3">
        <TransactionList />
      </div>
      <CreateTrxModal/>
    </div>
  )
}

export default App
