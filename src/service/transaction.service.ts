import { randomId } from "@/utils/";
import { IGroupTransaction, ITransaction } from "@/types";
import moment from "moment";

const STORAGE_KEY = 'my-list';

export const transactionService = {
  add: (payload: ITransaction) => {
    payload.id = randomId();
    payload.date = moment(payload.date).format();

    const existingItems = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY) as string) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existingItems, payload]));
  },
  get(): IGroupTransaction[] {
    const groupedItem: IGroupTransaction[] = [];
    const items = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY) as string) : [];

    items.forEach((trx: ITransaction) => {
      const trxMonth = moment(trx.date).format('MMM');
      const existItemIndex = groupedItem?.findIndex(item => item.month === trxMonth);

      if (existItemIndex > -1) {
        groupedItem[existItemIndex].transactions.push(trx);
        trx.type === 'income' ? groupedItem[existItemIndex].totalIncome += Number(trx.amount) : groupedItem[existItemIndex].totalExpense += Number(trx.amount);
      } else {
        groupedItem.push({
          month: trxMonth,
          transactions: [trx],
          totalIncome: trx.type === 'income' && Number(trx.amount) || 0,
          totalExpense: trx.type === 'expense' && Number(trx.amount) || 0,
        })
      }
    });

    const monthOrder = {
      'jan': 0,
      'feb': 1,
      'mar': 2,
      'apr': 3,
      'may': 4,
      'jun': 5,
      'jul': 6,
      'aug': 7,
      'sep': 8,
      'oct': 9,
      'nov': 10,
      'dec': 11
    };

    return groupedItem.sort((a, b) => monthOrder[b.month.toLowerCase() as keyof typeof monthOrder] - monthOrder[a.month.toLowerCase() as keyof typeof monthOrder]);
  }
}