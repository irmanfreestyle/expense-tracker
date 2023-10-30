import { randomId } from "@/utils/";
import { ITransaction } from "@/types";
import moment from "moment";

const STORAGE_KEY = 'my-list';

export const transactionService = {
  add: (payload: ITransaction) => {
    payload.id = randomId();
    payload.date = moment(payload.date).format();

    const existingItems = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY) as string) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existingItems, payload]));
  },
  get(id?:string) {
    const groupedItem: any = {};
    const items = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY) as string) : [];

    for (const item of items) {
      const month = moment(item.date).format('MMM')
      if (groupedItem[month]) {
        groupedItem[month].push(item)
      } else {
        groupedItem[month] = [item];
      }
    }
    console.log(groupedItem)
    return groupedItem;
  }
}