export type TransactionType = 'expense' | 'income'

export interface ITransaction {
  id: string
  title: string
  date: string
  amount: number
  type: TransactionType
}