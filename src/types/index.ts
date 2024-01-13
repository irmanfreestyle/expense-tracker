export type TransactionType = 'expense' | 'income'

export interface ITransaction {
  id: string
  title: string
  date: string
  amount: number
  type: TransactionType
}

export interface IGroupTransaction {
  month: string
  date: Date;
  transactions: ITransaction[]
  totalIncome: number
  totalExpense: number
}