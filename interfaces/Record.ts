export interface Record {
  categoryId: string;
  amount: number;
  description: string;
  type: 'outcome' | 'income';
  date?: string;
}
